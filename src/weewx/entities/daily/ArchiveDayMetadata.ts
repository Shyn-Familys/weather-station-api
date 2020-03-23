import { Column, Entity } from "typeorm";

@Entity("archive_day__metadata")
export class ArchiveDayMetadata {
  @Column("char", { primary: true, name: "name", length: 20, unique: true })
  name: NonNullable<unknown>;

  @Column("text", { name: "value", nullable: true })
  value: string | null;
}
