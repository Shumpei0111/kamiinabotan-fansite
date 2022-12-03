/**
 * DBに飲んだよカウンターの投票結果を格納する
 */
import Cookies from 'js-cookie';
import supabase from '../repositories/voteLiqourRepository.js';

const VOTE_TABLE = 't_liqour_vote';
const YOUSER_ID_KEY = 'yuriyoiUserId';

export const createUserId = () => {
    const cookieId = Cookies.get(YOUSER_ID_KEY);
    if (cookieId) return cookieId;
    const id = `${Math.floor(Math.random() * 99999)}_${Math.floor(
        Math.random() * 99999
    )}_${Math.floor(Math.random() * 99999)}`;

    Cookies.set(YOUSER_ID_KEY, id, { expires: 365, path: '' });
    return id;
};

export const getVotedLiqourList = async () => {
    try {
        const { data, error } = await supabase.from(VOTE_TABLE).select('*').order('liqourId');

        if (error) throw new Error(error);
        return data.sort((a, b) => {
            return Number(a.liqourId) > Number(b.liqourId) ? 1 : -1;
        });
    } catch (e) {
        console.log(e.message);
    }
};

export const updateVoteCount = async ({ liqourId, userId, isDrunk }) => {
    const { error } = await supabase.from(VOTE_TABLE).insert({ liqourId, userId, isVote: isDrunk });
};
