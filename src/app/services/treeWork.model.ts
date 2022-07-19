export interface TreeWork {
    id: number;
    orders: TreeWorkOrder[];
}

export interface TreeWorkOrder {
    objectid: number;
    building: string;
    streetname: string;
    pssite: string;
    width: string;
    bbl: string;
    bin: string;
    buildingnumber: string;
    census_tract: string;
    createddate: Date;
    crossstreet1: string;
    crossstreet2: string;
    globalid: string;
    latitude:  number;
    length:  number;
    longitude:  number;
    nta: string;
    updateddate: Date;
    zipcode: number;
}

export interface AllTrees {
    id: number;
    type: string;
    circumfrence?: number;
    condition?: 'good' | 'bad' | 'unknown';
}