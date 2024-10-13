import { Injectable, NotFoundException } from '@nestjs/common';
import { Recado } from './entities/recado.entity';
import { CreateRecadoDto } from './dto/create-recado.dto';
import { UpdateRecadoDto } from './dto/update-recado.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PessoasService } from 'src/pessoas/pessoas.service';

@Injectable()
export class RecadosService {
  constructor(
    @InjectRepository(Recado)
    private readonly recadoRepository: Repository<Recado>,
    private readonly pessoaService: PessoasService,
  ) {}

  throwNotFoundError() {
    throw new NotFoundException('Recado não encontrado');
  }

  async findAll() {
    return await this.recadoRepository.find();
  }

  async findOne(id: number) {
    const recado = await this.recadoRepository.findOne({
      where: { id },
    });

    if (recado) {
      return recado;
    }

    this.throwNotFoundError();
  }

  async create(createRecadoDto: CreateRecadoDto) {
    const novoRecado = {
      ...createRecadoDto,
      lido: false,
      data: new Date(),
    };

    const recado = await this.recadoRepository.create(novoRecado);

    return this.recadoRepository.save(recado);
  }

  async update(id: number, updateRecadoDto: UpdateRecadoDto) {
    const partialValues = {
      lido: updateRecadoDto?.lido,
      texto: updateRecadoDto?.texto,
    };

    const recado = await this.recadoRepository.preload({
      id,
      ...partialValues,
    });

    if (!recado) {
      this.throwNotFoundError();
    }

    return await this.recadoRepository.save(recado);
  }

  async remove(id: number) {
    const recado = await this.recadoRepository.findOneBy({ id });

    if (!recado) {
      this.throwNotFoundError();
    }

    return await this.recadoRepository.remove(recado);
  }
}
