/**
 * DBに飲んだよカウンターの投票結果を格納する
 */
import supabase from '../repositories/voteLiqourRepository.js';

export const getVotedLiqourList = async () => {
    const { data, error } = await supabase.from( 't_liqour_vote' ).select(`*`);

    console.log(10,data);

    return data;
};