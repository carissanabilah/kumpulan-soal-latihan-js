import { expect, test } from "vitest"
import findNeedle from "../../src/latihan-1/1_jarum_ditumpukan_jerami"

const haystack_1 = [
    "3",
    "123124234",
    undefined,
    "jarum",
    "kata",
    "hai",
    2,
    "3",
    true,
    false
]
const haystack_2 = [
    "283497238987234",
    "burung",
    "kucing",
    "some random junk",
    "a piece of hay",
    "jarum",
    "something somebody lost a while ago"
]
const haystack_3 = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    8,
    7,
    5,
    4,
    3,
    4,
    5,
    6,
    67,
    5,
    5,
    3,
    3,
    4,
    2,
    34,
    234,
    23,
    4,
    234,
    324,
    324,
    "jarum",
    1,
    2,
    3,
    4,
    5,
    5,
    6,
    5,
    4,
    32,
    3,
    45,
    54
]
const haystack_4 = [
    "hai",
    "junk",
    "hai",
    "hai",
    "moreJunk",
    "jarum",
    "randomJunk"
]

test.each([
    [haystack_1, 3],
    [haystack_2, 5],
    [haystack_3, 30],
    [haystack_4, 5]
])("Jarum ditumpukan jerami", (haystack, index) => {
    expect(findNeedle(haystack)).toBe(`menemukan jarum di posisi ${index}`)
})
