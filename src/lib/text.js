export function clean(e) {
    e = e.toLowerCase();
    e = e.replace(/\s+/g, '');
    return e;
}