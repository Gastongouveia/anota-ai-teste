export enum ItemType {
    LANDSCAPE = '1',
    FLOWER = '2',
    PIZZA = '3',
}

export const ItemTypeLabels = {
    [ItemType.LANDSCAPE]: 'Paisagem',
    [ItemType.FLOWER]: 'Flor',
    [ItemType.PIZZA]: 'Pizza',
};

export const ItemTypeClass = {
    [ItemType.LANDSCAPE]: 'landscape',
    [ItemType.FLOWER]: 'flower',
    [ItemType.PIZZA]: 'pizza',
};