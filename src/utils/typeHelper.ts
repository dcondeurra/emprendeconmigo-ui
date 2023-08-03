export function getObjectValues<T extends object>(obj: T) {
  return Object.keys(obj).map((objKey) => obj[objKey as keyof T]);
}

export function getObjectKeys<T extends object>(obj: T) {
  return Object.keys(obj) as (keyof T)[];
}

export function getValueForIndexer<Obj extends object>(
  obj: Obj,
  indexer: string,
) {
  const keys = getObjectKeys(obj);
  const values = getObjectValues(obj);
  return values[keys.findIndex((k) => k === indexer)];
}

export function getBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });
}
