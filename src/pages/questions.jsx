
const questoes = [
    // Array de perguntas e respostas
    {
        question: "Qual é a capital do Angola?",
        options: ["Luanda", "Rio de Janeiro", "São Paulo", "Salvador"],
        answer: 0
    },
    {
        question: "Qual é o maior país do mundo em área territorial?",
        options: ["Guiné", "Rússia", "China", "Estados Unidos"],
        answer: 1
    }, {
        question: "Quem inventou o telefone?",
        options: ["Alexander Graham Bell", "Thomas Edison", "Nikola Tesla", "Albert Einstein"],
        answer: 0
    },
    {
        question: "Qual é o símbolo químico do cálcio?",
        options: ["Ca", "C", "Cl", "Cu"],
        answer: 2
    }
    ,
    {
        question: "Quem desenvolveu a teoria da relatividade restrita?",
        options: ["Albert Einstein", "Isaac Newton", "Nikola Tesla", "Galileu Galilei"],
        answer: 1
    }
    ,
    {
        question: "Qual é a fórmula matemática para calcular o volume de um cubo?",
        options: ["V = l^3", "V = πr^2 * h", "V = 4/3 * πr^3", "V = 1/2 * (b + B) * h"],
        answer: 3
    }
    ,
    {
        question: "Quem é considerado o pai da psicanálise?",
        options: ["Sigmund Freud", "Ivan Pavlov", "B. F. Skinner", "Carl Jung"],
        answer: 0
    }
    ,
    {
        question: "Quem inventou a lâmpada elétrica?",
        options: ["Thomas Edison", "Nikola Tesla", "Benjamin Franklin", "Alexander Graham Bell"],
        answer: 2
    }
    ,
    {
        question: "Qual é a fórmula matemática para calcular o volume de um cone?",
        options: ["V = 1/3 * πr^2 * h", "V = l * w * h", "V = 4/3 * πr^3", "V = 1/2 * (b + B) * h"],
        answer: 1
    }
    ,
    {
        question: "Quem é considerado o pai da psicologia behaviorista?",
        options: ["B. F. Skinner", "Sigmund Freud", "Ivan Pavlov", "Carl Jung"],
        answer: 3
    }
    ,
    {
        question: "O que é um loop em programação?",
        options: ["Uma estrutura de controle que executa repetidamente um bloco de código", "Um tipo de variável que armazena múltiplos valores", "Uma função que converte um tipo de dado em outro", "Uma instrução que verifica uma condição e executa um bloco de código"],
        answer: 0
    }
    ,
    {
        question: "O que é um algoritmo?",
        options: ["Um conjunto de instruções passo a passo para resolver um problema", "Uma linguagem de programação", "Uma função que converte um tipo de dado em outro", "Uma estrutura de dados para armazenar informações"],
        answer: 0
    }
    ,
    {
        question: "O que é uma variável em programação?",
        options: ["Um local na memória usado para armazenar dados", "Um tipo de dado que representa verdadeiro ou falso", "Uma função que converte um tipo de dado em outro", "Uma estrutura de controle que executa repetidamente um bloco de código"],
        answer: 0
    }
    ,
    {
        question: "O que é a recursão em programação?",
        options: ["Um conceito em que uma função chama a si mesma", "Uma estrutura de controle que executa repetidamente um bloco de código", "Uma linguagem de programação", "Uma função que converte um tipo de dado em outro"],
        answer: 0
    }
    ,
    {
        question: "O que é a orientação a objetos em programação?",
        options: ["Um paradigma de programação que organiza dados e comportamentos em objetos", "Uma estrutura de controle que executa repetidamente um bloco de código", "Uma linguagem de programação", "Uma função que converte um tipo de dado em outro"],
        answer: 0
    }
    ,
    {
        question: "O que é um array em programação?",
        options: ["Uma estrutura de dados que armazena uma coleção de elementos", "Uma linguagem de programação", "Uma função que converte um tipo de dado em outro", "Uma estrutura de controle que executa repetidamente um bloco de código"],
        answer: 0
    }
    ,
    {
        question: "O que é a programação orientada a eventos?",
        options: ["Um paradigma de programação em que os programas respondem a eventos externos", "Uma estrutura de controle que executa repetidamente um bloco de código", "Uma linguagem de programação", "Uma função que converte um tipo de dado em outro"],
        answer: 0
    }
    ,
    {
        question: "O que é uma função em programação?",
        options: ["Um bloco de código que realiza uma tarefa específica", "Um tipo de dado que representa verdadeiro ou falso", "Uma linguagem de programação", "Uma estrutura de dados para armazenar informações"],
        answer: 0
    }
    ,
    {
        question: "O que é a programação estruturada?",
        options: ["Um paradigma de programação que utiliza estruturas de controle como sequência, decisão e repetição", "Uma estrutura de controle que executa repetidamente um bloco de código", "Uma linguagem de programação", "Uma função que converte um tipo de dado em outro"],
        answer: 0
    }
    ,
    {
        question: "O que é um ponteiro em programação?",
        options: ["Uma variável que armazena o endereço de memória de outra variável", "Uma estrutura de controle que executa repetidamente um bloco de código", "Uma linguagem de programação", "Uma função que converte um tipo de dado em outro"],
        answer: 0
    }
    ,
    {
        question: "O que é a programação funcional?",
        options: ["Um paradigma de programação baseado em funções puras e imutabilidade", "Uma estrutura de controle que executa repetidamente um bloco de código", "Uma linguagem de programação", "Uma função que converte um tipo de dado em outro"],
        answer: 0
    }
    ,
    {
        question: "O que é uma classe em programação orientada a objetos?",
        options: ["Uma estrutura que define um objeto com seus atributos e métodos", "Um tipo de dado que representa verdadeiro ou falso", "Uma função que converte um tipo de dado em outro", "Uma estrutura de controle que executa repetidamente um bloco de código"],
        answer: 0
    }
    ,
    {
        question: "O que é uma herança em programação orientada a objetos?",
        options: ["Um conceito em que uma classe herda características de uma classe pai", "Uma estrutura de controle que executa repetidamente um bloco de código", "Uma linguagem de programação", "Uma função que converte um tipo de dado em outro"],
        answer: 0
    }
    ,
    {
        question: "O que é uma pilha em programação?",
        options: ["Uma estrutura de dados que segue o princípio LIFO (Last In, First Out)", "Uma linguagem de programação", "Uma função que converte um tipo de dado em outro", "Uma estrutura de controle que executa repetidamente um bloco de código"],
        answer: 0
    }
    ,
    {
        question: "O que é a programação paralela?",
        options: ["Um paradigma de programação que executa tarefas simultaneamente em diferentes threads ou processos", "Uma estrutura de controle que executa repetidamente um bloco de código", "Uma linguagem de programação", "Uma função que converte um tipo de dado em outro"],
        answer: 0
    }
    ,
    {
        question: "O que é um algoritmo de ordenação?",
        options: ["Um algoritmo que organiza elementos em uma determinada ordem", "Um tipo de variável que armazena múltiplos valores", "Uma função que converte um tipo de dado em outro", "Uma instrução que verifica uma condição e executa um bloco de código"],
        answer: 0
    }
    ,
    {
        question: "O que é um método em programação orientada a objetos?",
        options: ["Uma função que pertence a uma classe e opera em objetos dessa classe", "Um tipo de dado que representa verdadeiro ou falso", "Uma estrutura de dados para armazenar informações", "Uma estrutura de controle que executa repetidamente um bloco de código"],
        answer: 0
    }
    ,
    {
        question: "O que é um operador em programação?",
        options: ["Um símbolo que realiza uma operação em um ou mais operandos", "Uma estrutura de controle que executa repetidamente um bloco de código", "Uma linguagem de programação", "Uma função que converte um tipo de dado em outro"],
        answer: 0
    }
    ,
    {
        question: "O que é a programação assíncrona?",
        options: ["Um modelo de programação em que tarefas são executadas de forma não sequencial", "Uma estrutura de controle que executa repetidamente um bloco de código", "Uma linguagem de programação", "Uma função que converte um tipo de dado em outro"],
        answer: 0
    }
    ,
    {
        question: "O que é a programação modular?",
        options: ["Um paradigma de programação que divide um programa em módulos independentes", "Uma estrutura de controle que executa repetidamente um bloco de código", "Uma linguagem de programação", "Uma função que converte um tipo de dado em outro"],
        answer: 0
    }
    ,
    {
        question: "Qual é a unidade de medida de potencial elétrico?",
        options: ["Volt", "Watt", "Ampere", "Ohm"],
        answer: 0
    }
    ,
    {
        question: "Quem é considerado o pai da teoria da gravidade?",
        options: ["Isaac Newton", "Albert Einstein", "Galileu Galilei", "Nikola Tesla"],
        answer: 2
    }
    ,
    {
        question: "Qual é a fórmula matemática para calcular o volume de um prisma retangular?",
        options: ["V = l * w * h", "V = 1/3 * πr^2 * h", "V = 4/3 * πr^3", "V = 1/2 * (b + B) * h"],
        answer: 1
    }
    ,
    {
        question: "Quem é considerado o pai da teoria da relatividade geral?",
        options: ["Albert Einstein", "Isaac Newton", "Nikola Tesla", "Galileu Galilei"],
        answer: 3
    }
    ,
    {
        question: "Qual é o símbolo químico do ferro?",
        options: ["Fe", "C", "Cl", "Cu"],
        answer: 0
    }
    ,
    {
        question: "Qual é a fórmula matemática para calcular o volume de uma esfera?",
        options: ["V = 4/3 * πr^3", "V = l * w * h", "V = 1/2 * (b + B) * h", "V = 1/3 * πr^2 * h"],
        answer: 2
    }
    ,
    {
        question: "Quem é conhecido como o pai da computação?",
        options: ["Alan Turing", "Bill Gates", "Steve Jobs", "Mark Zuckerberg"],
        answer: 1
    }
    ,
    {
        question: "Qual é a unidade de medida de corrente elétrica?",
        options: ["Ampere", "Watt", "Volt", "Ohm"],
        answer: 3
    }
    ,
    {
        question: "Quem descobriu a penicilina?",
        options: ["Alexander Fleming", "Marie Curie", "Louis Pasteur", "Gregor Mendel"],
        answer: 0
    }
    ,
    {
        question: "Qual é a fórmula matemática para calcular a área de um círculo?",
        options: ["A = πr^2", "A = l * w", "A = 1/2 * b * h", "A = s^2"],
        answer: 2
    }
    ,
    {
        question: "Quem é considerado o pai da computação moderna?",
        options: ["Alan Turing", "Bill Gates", "Steve Jobs", "Mark Zuckerberg"],
        answer: 3
    }
    ,
    {
        question: "Qual é a fórmula matemática para calcular a área de um triângulo?",
        options: ["A = 1/2 * b * h", "A = πr^2", "A = l * w", "A = s^2"],
        answer: 0
    }
    ,
    {
        question: "Quem descobriu a lei da gravidade?",
        options: ["Isaac Newton", "Albert Einstein", "Galileu Galilei", "Nikola Tesla"],
        answer: 1
    }
    ,
    {
        question: "Quem descobriu a penicilina?",
        options: ["Alexander Fleming", "Marie Curie", "Louis Pasteur", "Robert Koch"],
        answer: 2
    }
    ,
    {
        question: "Qual é a fórmula matemática para calcular a área de um retângulo?",
        options: ["A = l * w", "A = πr^2", "A = (b * h) / 2", "A = a^2"],
        answer: 0
    }
    ,
    {
        question: "Quem é considerado o pai da psicologia moderna?",
        options: ["Sigmund Freud", "Carl Jung", "Ivan Pavlov", "B. F. Skinner"],
        answer: 3
    }
    ,
    {
        question: "Qual é a unidade de medida de resistência elétrica?",
        options: ["Ohm", "Ampere", "Volt", "Watt"],
        answer: 1
    }
    ,
    {
        question: "Qual é a unidade de medida de temperatura no sistema internacional?",
        options: ["Kelvin", "Fahrenheit", "Celsius", "Rankine"],
        answer: 2
    }
    ,
    {
        question: "Quem é conhecido como o pai da eletricidade?",
        options: ["Benjamin Franklin", "Thomas Edison", "Nikola Tesla", "Michael Faraday"],
        answer: 3
    }
    ,
    {
        question: "Qual é a fórmula matemática para calcular o perímetro de um quadrado?",
        options: ["P = 4s", "P = l + w + h", "P = 2πr", "P = 1/2 * (b + B) * h"],
        answer: 0
    }
    ,
    {
        question: "Quem é considerado o pai da biologia moderna?",
        options: ["Charles Darwin", "Gregor Mendel", "Louis Pasteur", "Marie Curie"],
        answer: 1
    }
    ,
    {
        question: "Qual é o símbolo químico do oxigênio?",
        options: ["O", "Ca", "Cl", "Cu"],
        answer: 2
    }
    ,
    {
        question: "Quem é conhecido como o pai da genética?",
        options: ["Gregor Mendel", "Charles Darwin", "Louis Pasteur", "Marie Curie"],
        answer: 3
    }
    ,
    {
        question: "Qual é a fórmula matemática para calcular o perímetro de um retângulo?",
        options: ["P = 2(l + w)", "P = l + w + h", "P = 2πr", "P = 1/2 * (b + B) * h"],
        answer: 0
    }
    ,
    {
        question: "Quem é considerado o pai da eletrônica?",
        options: ["Michael Faraday", "Thomas Edison", "Nikola Tesla", "Benjamin Franklin"],
        answer: 1
    }
    ,
    {
        question: "Qual é a fórmula matemática para calcular a área de um retângulo?",
        options: ["A = l * w", "A = 1/2 * b * h", "A = πr^2", "A = s^2"],
        answer: 2
    }
    ,
    {
        question: "Quem propôs a teoria do Big Bang?",
        options: ["Georges Lemaître", "Edwin Hubble", "Isaac Newton", "Albert Einstein"],
        answer: 3
    }
    ,
    {
        question: "Qual é a unidade de medida de resistência elétrica?",
        options: ["Ohm", "Watt", "Ampere", "Volt"],
        answer: 0
    }
    ,
    {
        question: "Quem é considerado o pai da química moderna?",
        options: ["Antoine Lavoisier", "Marie Curie", "Louis Pasteur", "Dmitri Mendeleev"],
        answer: 1
    }
    ,
    {
        question: "Qual é a fórmula matemática para calcular a área de um quadrado?",
        options: ["A = s^2", "A = l * w", "A = 1/2 * b * h", "A = πr^2"],
        answer: 2
    }
    ,
    {
        question: "Quem é conhecido como o pai da física moderna?",
        options: ["Isaac Newton", "Albert Einstein", "Galileu Galilei", "Nikola Tesla"],
        answer: 3
    }
    ,
    {
        question: "Qual é o símbolo químico do hidrogênio?",
        options: ["H", "Ca", "Cl", "Cu"],
        answer: 0
    }
    ,
    {
        question: "Quem é considerado o pai da teoria quântica?",
        options: ["Max Planck", "Erwin Schrödinger", "Niels Bohr", "Werner Heisenberg"],
        answer: 1
    }
    ,
    {
        question: "Qual é a fórmula matemática para calcular o perímetro de um círculo?",
        options: ["P = 2πr", "P = l + w + h", "P = 4s", "P = 1/2 * (b + B) * h"],
        answer: 2
    }
    ,
    {
        question: "Quem é conhecido como o pai da química?",
        options: ["Robert Boyle", "Antoine Lavoisier", "Marie Curie", "Louis Pasteur"],
        answer: 3
    },
    {
        question: "Quem é considerado o pai da geometria?",
        options: ["Euclides", "Arquimedes", "Pitágoras", "Eratóstenes"],
        answer: 1
    }
    ,
    {
        question: "Qual é a fórmula matemática para calcular a circunferência de um círculo?",
        options: ["C = 2πr", "C = πr^2", "C = l + w", "C = a^2"],
        answer: 3
    }
    ,
    {
        question: "Quem propôs a teoria da relatividade?",
        options: ["Albert Einstein", "Isaac Newton", "Niels Bohr", "Max Planck"],
        answer: 2
    }
    ,
    {
        question: "Qual é o símbolo químico do sódio?",
        options: ["Na", "So", "K", "Mg"],
        answer: 3
    }
    ,
    {
        question: "Qual é a fórmula matemática para calcular a área de um trapézio?",
        options: ["A = (b1 + b2) * h / 2", "A = πr^2", "A = l * w", "A = a^2"],
        answer: 0
    }
    ,
    {
        question: "Quem foi o primeiro cientista a formular a lei da gravitação universal?",
        options: ["Isaac Newton", "Galileu Galilei", "Johannes Kepler", "Albert Einstein"],
        answer: 2
    }
    ,
    {
        question: "Qual é o símbolo químico do carbono?",
        options: ["C", "Ca", "Co", "Cu"],
        answer: 3
    }
    ,
    {
        question: "Qual é a fórmula química da água?",
        options: ["H2O", "CO2", "NaCl", "C6H12O6"],
        answer: 2
    }
    ,
    {
        question: "Quem é conhecido como o pai da física moderna?",
        options: ["Isaac Newton", "Albert Einstein", "Niels Bohr", "Max Planck"],
        answer: 1
    }
    ,
    {
        question: "Qual é a fórmula matemática para calcular o volume de uma esfera?",
        options: ["V = (4/3)πr^3", "V = l * w * h", "V = πr^2", "V = a^3"],
        answer: 3
    }
    ,
    {
        question: "Quem desenvolveu a teoria da evolução das espécies por seleção natural?",
        options: ["Charles Darwin", "Gregor Mendel", "Louis Pasteur", "Marie Curie"],
        answer: 2
    }
    ,
    {
        question: "Qual é o símbolo químico do potássio?",
        options: ["K", "P", "Fe", "Ni"],
        answer: 1
    }
    ,
    {
        question: "Qual é a fórmula matemática para calcular a área de um pentágono?",
        options: ["A = (b * h) / 2", "A = πr^2", "A = l * w", "A = 5a^2"],
        answer: 3
    }
    ,
    {
        question: "Quem é considerado o pai da psicanálise?",
        options: ["Sigmund Freud", "Carl Jung", "Ivan Pavlov", "B. F. Skinner"],
        answer: 2
    }
    ,
    {
        question: "Qual é a unidade de medida de corrente elétrica?",
        options: ["Ampere", "Ohm", "Volt", "Watt"],
        answer: 1
    }
    ,
    {
        question: "Quem é considerado o pai da astronomia moderna?",
        options: ["Nicolas Copérnico", "Galileu Galilei", "Johannes Kepler", "Isaac Newton"],
        answer: 3
    }
    ,
    {
        question: "Qual é o símbolo químico do magnésio?",
        options: ["Mg", "Mn", "Mo", "Me"],
        answer: 0
    }
    ,
    {
        question: "Qual é a fórmula química do sal de cozinha?",
        options: ["NaCl", "H2O", "CO2", "C6H12O6"],
        answer: 1
    }
    ,
    {
        question: "Quem é conhecido como o pai da teoria quântica?",
        options: ["Max Planck", "Albert Einstein", "Niels Bohr", "Erwin Schrödinger"],
        answer: 2
    }
    ,
    {
        question: "Qual é a fórmula matemática para calcular o volume de um cubo?",
        options: ["V = a^3", "V = (4/3)πr^3", "V = l * w * h", "V = πr^2"],
        answer: 0
    }
    ,
    {
        question: "Quem é conhecido como o pai da psicologia behaviorista?",
        options: ["B. F. Skinner", "Sigmund Freud", "Carl Jung", "Ivan Pavlov"],
        answer: 3
    }
    ,
    {
        question: "Qual é o símbolo químico do ferro?",
        options: ["Fe", "Fr", "Fl", "Fa"],
        answer: 1
    }
    ,
    {
        question: "Qual é a fórmula matemática para calcular a área de um hexágono?",
        options: ["A = (b * h) / 2", "A = πr^2", "A = l * w", "A = 6a^2"],
        answer: 3
    }
    ,
    {
        question: "Quem é considerado o pai da psicologia analítica?",
        options: ["Carl Jung", "Sigmund Freud", "Ivan Pavlov", "B. F. Skinner"],
        answer: 2
    }
    ,
    {
        question: "Qual é a unidade de medida de tensão elétrica?",
        options: ["Volt", "Ohm", "Ampere", "Watt"],
        answer: 1
    }
    ,
    {
        question: "Quem foi o astrônomo que formulou as três leis do movimento planetário?",
        options: ["Johannes Kepler", "Nicolas Copérnico", "Galileu Galilei", "Isaac Newton"],
        answer: 3
    }
    ,
    {
        question: "Qual é o símbolo químico do níquel?",
        options: ["Ni", "Na", "Ne", "Nu"],
        answer: 0
    }
    ,
    {
        question: "Qual é a fórmula química do dióxido de carbono?",
        options: ["CO2", "NaCl", "H2O", "C6H12O6"],
        answer: 1
    }
    ,
    {
        question: "Quem desenvolveu a teoria da relatividade geral?",
        options: ["Albert Einstein", "Isaac Newton", "Niels Bohr", "Max Planck"],
        answer: 2
    }
    ,
    {
        question: "Qual é a fórmula matemática para calcular o volume de um cilindro?",
        options: ["V = πr^2h", "V = a^3", "V = l * w * h", "V = (4/3)πr^3"],
        answer: 0
    }
    ,
    {
        question: "Quem é considerado o pai da psicologia freudiana?",
        options: ["Sigmund Freud", "Carl Jung", "Ivan Pavlov", "B. F. Skinner"],
        answer: 3
    }
    ,
    {
        question: "Qual é o símbolo químico do cobre?",
        options: ["Cu", "Co", "Ca", "Cr"],
        answer: 0
    }
    ,
    {
        question: "Qual é a fórmula matemática para calcular a área de um octógono?",
        options: ["A = (b * h) / 2", "A = πr^2", "A = l * w", "A = 8a^2"],
        answer: 3
    }
    ,
    {
        question: "Quem é considerado o pai da psicologia behaviorista radical?",
        options: ["B. F. Skinner", "Sigmund Freud", "Carl Jung", "Ivan Pavlov"],
        answer: 2
    }
    ,
    {
        question: "Qual é a unidade de medida de potência elétrica?",
        options: ["Watt", "Ohm", "Ampere", "Volt"],
        answer: 1
    }
    ,
    {
        question: "Quem enunciou as leis do movimento e a lei da gravitação universal?",
        options: ["Isaac Newton", "Johannes Kepler", "Nicolas Copérnico", "Galileu Galilei"],
        answer: 3
    }
    ,
    {
        question: "Qual é o símbolo químico do alumínio?",
        options: ["Al", "Am", "As", "At"],
        answer: 0
    }
    ,
    {
        question: "Qual é a fórmula química do ácido clorídrico?",
        options: ["HCl", "NaCl", "H2O", "CO2"],
        answer: 1
    }
    ,
    {
        question: "Quem é conhecido como o pai da mecânica quântica?",
        options: ["Niels Bohr", "Albert Einstein", "Max Planck", "Erwin Schrödinger"],
        answer: 2
    }
    ,
    {
        question: "Qual é a fórmula matemática para calcular o volume de um cone?",
        options: ["V = (1/3)πr^2h", "V = a^3", "V = l * w * h", "V = (4/3)πr^3"],
        answer: 0
    }
    ,
    {
        question: "Quem é considerado o pai da psicologia analítica?",
        options: ["Carl Jung", "Sigmund Freud", "Ivan Pavlov", "B. F. Skinner"],
        answer: 3
    }
    ,
    {
        question: "Qual é o símbolo químico do zinco?",
        options: ["Zn", "Zi", "Ze", "Za"],
        answer: 0
    }
    ,
    {
        question: "Qual é a fórmula matemática para calcular a área de um dodecágono?",
        options: ["A = (b * h) / 2", "A = πr^2", "A = l * w", "A = 12a^2"],
        answer: 3
    }
    ,
    {
        question: "Quem é considerado o pai da psicologia humanista?",
        options: ["Abraham Maslow", "Sigmund Freud", "Carl Jung", "Ivan Pavlov"],
        answer: 2
    }
    ,
    {
        question: "Qual é a unidade de medida de energia elétrica?",
        options: ["Watt", "Ohm", "Ampere", "Joule"],
        answer: 1
    }
    ,
    {
        question: "Quem desenvolveu a lei da gravitação universal?",
        options: ["Isaac Newton", "Galileu Galilei", "Johannes Kepler", "Albert Einstein"],
        answer: 3
    }
    , {
        question: "O que significa a sigla IoT?",
        options: ["Internet of Things", "Integrated Operations Team", "Internet on Televisions", "Input/Output Technology"],
        answer: 0
    }
    ,
    {
        question: "Qual é o componente eletrônico responsável por amplificar um sinal elétrico?",
        options: ["Transistor", "Resistor", "Capacitor", "Indutor"],
        answer: 0
    }
    ,
    {
        question: "O que significa a sigla PWM?",
        options: ["Pulse Width Modulation", "Power Wiring Management", "Printed Wiring Module", "Programmable Wireless Module"],
        answer: 0
    }
    ,
    {
        question: "Qual é o microcontrolador mais utilizado em projetos de robótica?",
        options: ["Arduino", "Raspberry Pi", "ESP8266", "BeagleBone"],
        answer: 0
    }
    ,
    {
        question: "O que é um sensor de ultrassom?",
        options: ["Um sensor que emite ondas sonoras de alta frequência para medir distâncias", "Um sensor que detecta luz infravermelha para medições de temperatura", "Um sensor que mede a resistência elétrica de um componente", "Um sensor que detecta campos magnéticos"],
        answer: 0
    }
    ,
    {
        question: "Qual é o componente eletrônico responsável por armazenar cargas elétricas?",
        options: ["Capacitor", "Resistor", "Transistor", "Indutor"],
        answer: 0
    }
    ,
    {
        question: "O que é um servo motor?",
        options: ["Um dispositivo que converte energia elétrica em energia mecânica", "Um dispositivo que controla o fluxo de corrente em um circuito", "Um dispositivo que converte energia térmica em energia elétrica", "Um dispositivo que mede a temperatura"],
        answer: 0
    }
    ,
    {
        question: "O que é um microprocessador?",
        options: ["Um circuito integrado que contém um processador, memória e periféricos em um único chip", "Um dispositivo que amplifica sinais elétricos", "Um dispositivo que converte sinais analógicos em sinais digitais", "Um componente eletrônico utilizado para armazenar dados"],
        answer: 0
    }
    ,
    {
        question: "O que é uma placa de prototipagem?",
        options: ["Uma placa utilizada para testar e montar circuitos eletrônicos", "Uma placa utilizada para conectar dispositivos à internet", "Uma placa utilizada para medir grandezas elétricas", "Uma placa utilizada para armazenar dados"],
        answer: 0
    }
    ,
    {
        question: "Qual é a função de um sensor de luz?",
        options: ["Detectar e medir a intensidade de luz", "Controlar o fluxo de corrente em um circuito", "Converter energia elétrica em energia mecânica", "Amplificar sinais elétricos"],
        answer: 0
    }
    ,
    {
        question: "O que é um motor de passo?",
        options: ["Um motor que gira em pequenos incrementos ou passos", "Um motor que converte energia elétrica em energia mecânica", "Um motor que mede a resistência elétrica de um componente", "Um motor que detecta campos magnéticos"],
        answer: 0
    }
    ,
    {
        question: "O que é um circuito integrado?",
        options: ["Um conjunto de componentes eletrônicos interconectados em um chip", "Um dispositivo que amplifica sinais elétricos", "Um dispositivo que mede a temperatura", "Um componente eletrônico utilizado para armazenar dados"],
        answer: 0
    }
    ,
    {
        question: "Qual é a função de um sensor de temperatura?",
        options: ["Detectar e medir a temperatura ambiente ou de um objeto", "Controlar o fluxo de corrente em um circuito", "Converter energia elétrica em energia mecânica", "Amplificar sinais elétricos"],
        answer: 0
    }
    ,
    {
        question: "O que é um resistor?",
        options: ["Um componente eletrônico que limita o fluxo de corrente em um circuito", "Um componente que armazena cargas elétricas", "Um componente que amplifica sinais elétricos", "Um componente que mede a temperatura"],
        answer: 0
    }
    ,
    {
        question: "Qual é a função de um motor DC?",
        options: ["Converter energia elétrica em energia mecânica", "Controlar o fluxo de corrente em um circuito", "Detectar e medir grandezas elétricas", "Amplificar sinais elétricos"],
        answer: 0
    }
    ,
    {
        question: "O que é um acelerômetro?",
        options: ["Um sensor que mede a aceleração de um objeto", "Um sensor que detecta luz infravermelha para medições de temperatura", "Um sensor que mede a resistência elétrica de um componente", "Um sensor que detecta campos magnéticos"],
        answer: 0
    }
    ,
    {
        question: "O que é um circuito impresso?",
        options: ["Uma placa na qual são impressos os circuitos eletrônicos", "Uma placa utilizada para conectar dispositivos à internet", "Uma placa utilizada para medir grandezas elétricas", "Uma placa utilizada para armazenar dados"],
        answer: 0
    }
    ,
    {
        question: "Qual é a função de um sensor de proximidade?",
        options: ["Detectar a presença ou ausência de objetos próximos", "Controlar o fluxo de corrente em um circuito", "Converter energia elétrica em energia mecânica", "Amplificar sinais elétricos"],
        answer: 0
    }
    ,
    {
        question: "O que é um relé?",
        options: ["Um dispositivo eletromagnético que controla o fluxo de corrente em um circuito", "Um componente eletrônico que armazena cargas elétricas", "Um dispositivo que amplifica sinais elétricos", "Um componente eletrônico utilizado para medir grandezas elétricas"],
        answer: 0
    }
    ,
    {
        question: "O que é um sensor de movimento?",
        options: ["Um sensor que detecta e mede movimentos de objetos", "Um sensor que detecta luz infravermelha para medições de temperatura", "Um sensor que mede a resistência elétrica de um componente", "Um sensor que detecta campos magnéticos"],
        answer: 0
    }

    // Restante das perguntas...
];


export default questoes;