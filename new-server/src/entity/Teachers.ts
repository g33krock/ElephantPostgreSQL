import {BaseEntity, Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Teachers extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({
		nullable: true
	})
	firstName: string;

	@Column({
		nullable: true
	})
	lastName: string;

	@Column({
		nullable: true
	})
	campus: string;

	@Column({
		nullable: true
	})
	role: string;

	@Column({
		nullable: true
	})
	image: string;

}
