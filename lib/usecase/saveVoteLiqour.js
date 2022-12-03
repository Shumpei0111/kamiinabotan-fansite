/**
 * DBに飲んだよカウンターの投票結果を格納する
 */
import supabase from '../repositories/voteLiqourRepository.js';

export const getVotedLiqourList = async () => {
    const { data, error } = await supabase.from('votes').select('liqourId');

    console.log(10, data, error);

    return data;
};
