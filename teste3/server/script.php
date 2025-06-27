<?php
class Pais{
    public string $nome;
    public string $capital;
    public int $populacao;
    public string $continente;

    public function __construct($nome, $capital, $populacao, $continente) {
        $this->nome = $nome;
        $this->capital = $capital;
        $this->populacao = $populacao;
        $this->continente = $continente;
    }
    public function info(){
        echo "

País : $this->nome 
Capital : $this->capital 
População : $this->populacao
Continente : $this->continente


";
    }
}
//herança da classe Pais
class Brasil extends Pais{
    public function __construct(){
        $this->nome = "Brasil";
        $this->capital = "Brasília";
        $this->populacao = 210000000;
        $this->continente = "América do Sul";
    }
}
$brasil = new Brasil();
$brasil->info();

$eua = new Pais('Estados Unidos da América','Washinthon D.C',)

?>