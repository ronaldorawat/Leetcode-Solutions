/**
 * @param {number[]} heights
 * @param {number[][]} queries
 * @return {number[]}
 */
var leftmostBuildingQueries = function(heights, queries) {
         const n = heights.length;
    const st = Array.from({ length: n }, () => Array(20).fill(0));
    const Log = Array(n + 1).fill(0);
    Log[0] = -1;

    for (let i = 1; i <= n; i++) {
        Log[i] = Log[i >> 1] + 1;
    }

    for (let i = 0; i < n; i++) {
        st[i][0] = heights[i];
    }

    for (let i = 1; i < 20; i++) {
        for (let j = 0; j + (1 << i) <= n; j++) {
            st[j][i] = Math.max(st[j][i - 1], st[j + (1 << (i - 1))][i - 1]);
        }
    }

    const res = [];

    for (let i = 0; i < queries.length; i++) {
        let [l, r] = queries[i];
        if (l > r) {
            [l, r] = [r, l];
        }

        if (l === r) {
            res.push(l);
            continue;
        }

        if (heights[r] > heights[l]) {
            res.push(r);
            continue;
        }

        const maxHeight = Math.max(heights[l], heights[r]);
        let left = r + 1, right = n, mid;

        while (left < right) {
            mid = Math.floor((left + right) / 2);
            const k = Log[mid - r + 1];
            const maxInRange = Math.max(st[r][k], st[mid - (1 << k) + 1][k]);

            if (maxInRange > maxHeight) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }

        res.push(left === n ? -1 : left);
    }

    return res;
};