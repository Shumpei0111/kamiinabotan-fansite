/**
 * DBに飲んだよカウンターの投票結果を格納する
 */
import supabase from '../repositories/voteLiqourRepository.js';

export const getVotedLiqourList = async () => {
    try {
        const { data, error } = await supabase.from('t_liqour_vote').select('*').order('liqourId');

        if (error) throw new Error(error);
        return data.sort((a, b) => {
            return Number(a.liqourId) > Number(b.liqourId) ? 1 : -1;
        });
    } catch (e) {
        console.log(e.message);
    }
};
