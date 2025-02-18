/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ  
InshaAllah, By his marcy I will Gain Success 
*/

export default function catchError(res, error) {
    try {
        console.error(error);
        if (typeof error === 'string') return res.status(500).json({ error: { massage: error } });
        return res.status(500).json({ error });
    } catch (error) {
        console.error(error);
    }
}

export function namedErrorCatching(name, error) {
    if (typeof error !== 'object') {
        throw {
            type: name,
            massage :error
        }
    }
    throw {
        type: name,
        ...error
    }
} 