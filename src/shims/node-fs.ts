export function existsSync(): boolean {
  return false;
}

export function readFileSync(): string {
  return '';
}

export function readdirSync(): string[] {
  return [];
}

export function mkdirSync(): void {}

export function writeFileSync(): void {}

export default {
  existsSync,
  readFileSync,
  readdirSync,
  mkdirSync,
  writeFileSync,
};
