export class Category {
  id?: number | null;
  describe?: string;
  total?: number | null;

  constructor(describe_item: string, id?: number, total_item?: number) {
    this.describe = describe_item;
    this.id = id || null; // Sử dụng null hoặc giá trị mặc định tùy thuộc vào tình huống.
    this.total = total_item || null;
  }
}
