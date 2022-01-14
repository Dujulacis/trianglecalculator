function perimeter (m1, m2, m3) {
    const m = nolasa();
    m1 = m.m1; m2 = m.m2; m3 = m.m3;
    console.log(m1, m2, m3);
    const p = m1 + m2 + m3;
    console.log (p);
    return p;
}
function laukums (m1, m2, m3) {
    const m = nolasa();
    m1 = m.m1; m2 = m.m2; m3 = m.m3;
    const pusper = (m1 + m2 + m3)/2;
    let laukums = Math.sqrt(pusper*(pusper-m1)*(pusper-m2)*(pusper-m3));
    console.log(laukums);
    return laukums;

 
}


const m = nolasa();
m1 = m.m1; m2 = m.m2; m3 = m.m3;