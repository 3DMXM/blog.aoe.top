// 序列化大数 2646 => 2.6k
export function formatNumber(num: number) {
    if (num > 999999) {
        return (num / 1000000).toFixed(1) + 'M';
    } else if (num > 9999) {
        return (num / 10000).toFixed(1) + 'W';
    } else if (num > 999) {
        return (num / 1000).toFixed(1) + 'K';
    } else {
        return num;
    }
}