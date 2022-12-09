/**
 * DBに飲んだよカウンターの投票結果を格納する
 */
import Cookies from 'js-cookie';
import supabase from '../repositories/voteLiqourRepository.js';
import { v4 as uuid } from 'uuid';

const VOTE_TABLE = 't_liqour_vote';
const YOUSER_ID_KEY = 'yuriyoiUserId';

export const createUserId = () => {
    const cookieId = Cookies.get(YOUSER_ID_KEY);
    if (cookieId) return cookieId;
    const id = uuid();

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
    try {
        const { error, data } = await supabase
            .from(VOTE_TABLE)
            .insert({ liqourId, userId, isVote: isDrunk });

        console.log(error, data);
    } catch (e) {
        console.error(e.message);
    }
};
