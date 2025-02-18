/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ  Insha Allah 
By his marcy,  I will gain success
*/


export function removeCharecters(d="") {
    if (d.includes(`'`)) d=d.replaceAll(`'`, '&apos;');
    if (d.includes(`"`)) d=d.replaceAll(`"`,'&quot;');
    if (d.includes(`<`)) d=d.replaceAll(`<`,'&lt;');
    if (d.includes(`>`)) d=d.replaceAll(`>`,'&gt;');
    if (d.includes(`*`)) d=d.replaceAll(`*`,'&#42;');
    if (d.includes(`=`)) d=d.replaceAll(`=`,'&#61;');
    if (d.includes(`!`)) d=d.replaceAll(`!`,'&#33;');
    return d;
}


export function removeCharectersAll(arr=['']) {
    arr=arr.map(function (element, index) {
        if (typeof element !== 'string') {
            throw new Error("Element is not string at index : " + index);
        }
        return removeCharecters(element)
    });
    return arr;
}

export function giveRegexWord(t='') {
    return `[${t.at(0).toLowerCase()}${t.at(0).toUpperCase()}]` + t.slice(1);
}