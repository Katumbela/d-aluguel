import ard_nano from '../imgs/ard_nano.webp'
import sensor_r from '../imgs/sensor.webp'
import aro from '../imgs/arobot.png'
import roda from '../imgs/roda.png'
import su from '../imgs/su.jpg'
import uno from '../imgs/uno.png'
import servo from '../imgs/Servo.png'
import jump from '../imgs/jump.jpg'

const produtos = [
    {
        id: 1,
        tit: "Arduino Nano",
        preco: 8000,
        img: ard_nano,
        desc: "O Arduino Nano é uma plataforma de prototipagem eletrônica de hardware livre e de placa única, projetada com um microcontrolador Atmel AVR com circuitos de entrada/saída embutido que podem ser facilmente conectados à um computador e programada via IDE (Integrated Development Environment, ou Ambiente de Desenvolvimento"
    },
    {
        id: 2,
        tit: "Sensor Ultrasonico",
        preco: 4000,
        img: su,
        desc: "Os sensores ultrassônicos são ideais para detecção de líquidos, sejam transparentes ou turvos. Amarelo, roxo ou vermelho? Os sensores ultrassônicos detectam qualquer cor, com a mesma distância. Mais vantajoso em relação aos sensores fotoelétricos por difusão que não são imunes as cores dos objetos detectados."
    },
    {
        id: 3,
        tit: "KIT AROBOT",
        preco: 29000,
        img: aro,
        desc: "O kit AROBOT é um kit de robô educacional projetado para crianças aprenderem sobre robótica e programação. O kit inclui uma variedade de componentes, incluindo motores, sensores, controladores e outras peças eletrônicas que permitem que as crianças construam e programem seu próprio robô. Com a ajuda de um guia passo a passo e uma interface de programação gráfica intuitiva, as crianças podem criar diferentes modelos de robôs e personalizar suas funcionalidades. O kit AROBOT é ideal para crianças de 8 a 17 anos que desejam desenvolver suas habilidades STEM e explorar o excitante mundo da robótica. Ao montar e programar seu próprio robô, as crianças podem aprender sobre mecânica, eletrônica e programação de computadores enquanto se divertem e se envolvem em atividades criativas de resolução de problemas. O kit AROBOT é uma ferramenta perfeita para inspirar a próxima geração de jovens inovadores e criadores."
    },
    {
        id: 4,
        tit: "Jumpers (M/F)",
        preco: 400,
        img: jump,
        desc: "Os jumpers são chaves elétricas utilizadas em placas e alguns dispositivos, como discos rígidos para ativar, regular ou desativar funções específicas do sistema que não são acessíveis via software."
    },
    {
        id: 5,
        tit: "Servo Motor 9g",
        preco: 8000,
        img: servo,
        desc: "O Micro Servo 9g Sg90 é um micro servo motor que possui engrenagens de nylon, muito utilizado em projetos de aeromodelismo e robótica, ele possui ângulos de rotação de 180º e por ter um ótimo custo x benefício, ele é o modelo preferido dos desenvolvedores e hobbystas."
    },
    {
        id: 6,
        tit: "Rodas",
        preco: 800,
        img: roda,
        desc: "Sabemos que os pneus e rodas são essenciais para locomoções de quase todo tipo de  meio de transporte desde de um simples carrinho de supermercado até um avião."

    },
    {
        id: 7,
        tit: "Sensor IR",
        preco: 8.000,
        img: sensor_r,
        desc: "O Sensor de Obstáculo Infravermelho IR, é um sensor capaz de detectar a presença de objetos através de um receptor e um emissor IR, enviando e recebendo luzes infravermelhas e trabalhando em conjunto com o C.I comparador LM393."
    },
    {
        id: 8,
        tit: "Arduino UNO",
        preco: 12000,
        img: uno,
        desc: "O Arduino Uno R3 é uma placa baseada no microcontrolador Tmega328 (datasheet). Ele tem 14 pinos de entrada/saída digital (dos quais 6 podem ser usados como saídas PWM), 6 entradas analógicas, um cristal oscilador de 16MHz, uma conexão USB, uma entrada de alimentação uma conexão ICSP e um botão de reset."
    },
];

export default produtos