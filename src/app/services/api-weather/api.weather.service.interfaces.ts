export interface AddressServiceGetStateDDDList {
    UFs: Array<{
        Uf: string;
        DescricaoUf: string;
        Ddds: Array<string>;
        Selecionado: boolean;
    }>;
    Cidades: Array<{
        Id: number;
        Uf: string;
        UfDescricao: string;
        Cidade: string;
        Ddd: string;
        DddPrincipal: boolean;
    }>;
    retorno: string;
    mensagem: string;
    detalhes: any;
    protocolo: string;
    valido: boolean;
}
