const prompt = require("prompt-sync")();
console.clear()
jogo: while(true) {
    aventura: while(true) {
        let rodada = 0
        let kills = 0
        let dia = 0
        let numeroOponente = 0
        const backupJogador = {
            nome: "",
            nivel: 1,
            vida: 100,
            ataque: 20,
            defesa: 20,
            dinheiro: 20,
            magia: 0,
        }
        const backupReserva = {
            nome: "",
            nivel: 1,
            vida: 100,
            ataque: 20,
            defesa: 20,
            dinheiro: 20,
            magia: 0,
        }
        function backup(a,b){
            if (a == 1){
                backupJogador.nome = b.nome
                backupJogador.nivel = b.nivel
                backupJogador.vida = b.vida
                backupJogador.ataque = b.ataque
                backupJogador.defesa = b.defesa
                backupJogador.dinheiro = b.dinheiro
                backupJogador.magia = b.magia
            }   
            else if (a == 2){
                b.nome = backupJogador.nome 
                b.nivel = backupJogador.nivel 
                b.vida = backupJogador.vida 
                b.ataque = backupJogador.ataque  
                b.defesa = backupJogador.defesa  
                b.dinheiro = backupJogador.dinheiro  
                b.magia = backupJogador.magia  
            }
        }
        function backup2(a,b){
            if (a == 1){
                backupReserva.nome = b.nome
                backupReserva.nivel = b.nivel
                backupReserva.vida = b.vida
                backupReserva.ataque = b.ataque
                backupReserva.defesa = b.defesa
                backupReserva.dinheiro = b.dinheiro
                backupReserva.magia = b.magia
            }   
            else if (a == 2){
                b.nome = backupReserva.nome 
                b.nivel = backupReserva.nivel 
                b.vida = backupReserva.vida 
                b.ataque = backupReserva.ataque  
                b.defesa = backupReserva.defesa  
                b.dinheiro = backupReserva.dinheiro  
                b.magia = backupReserva.magia  
            }
        }
        const statusJogador = {
            nome: "",
            nivel: 1,
            vida: 100,
            ataque: 20,
            defesa: 10,
            dinheiro: 20,
            magia: 0,
            pontuacao: 0,
            mapa: 0,
            espada: 0,
            capa: 0,
            amuleto: 0,
            pocao: 0,
            grupo: 0,
            tempo: 0,
            consultarStatus: function(){
                console.log(`\nSEU STATUS:`)
                console.log(`Nome: ${this.nome}`)
                console.log(`N??vel: ${this.nivel}`)
                console.log(`Vida: ${this.vida}`)
                console.log(`Ataque: ${this.ataque}`)
                console.log(`Defesa: ${this.defesa}`)
                console.log(`Dinheiro: ${this.dinheiro}`)
                console.log(`Magia: ${this.magia}\n`)
                prompt(`[ENTER]`)
            },
            aumentarNivel: function(a = 1){
                this.nivel += a
                this.vida += 100
                this.defesa += 10
                this.ataque += 20
                this.dinheiro += (20 * this.nivel)
                this.magia += 5
                console.log(`\nVOC?? SUBIU DE N??VEL!`)
                console.log(`\nSEU STATUS:`)
                console.log(`Nome: ${this.nome}`)
                console.log(`N??vel: ${this.nivel} (+${this.nivel - backupJogador.nivel})`)
                console.log(`Vida: ${this.vida} (+${this.vida - backupJogador.vida})`)
                console.log(`Ataque: ${this.ataque} (+${this.ataque - backupJogador.ataque})`)
                console.log(`Defesa: ${this.defesa} (+${this.defesa - backupJogador.defesa})`)
                console.log(`Dinheiro: ${this.dinheiro} (+${this.dinheiro - backupJogador.dinheiro})`)
                console.log(`Magia: ${this.magia} (+${this.magia - backupJogador.magia})\n`)
                prompt(`[ENTER]`)
                console.log()
            },
            dano: function(quantidade){
                let a = quantidade - this.defesa
                let b = quantidade > this.defesa ? a : 0
                this.vida -= b
                console.log()
                if (b == 0){
                    console.log("Voc?? defendeu o ataque.")
                }
                if (this.vida <= 0) {
                    console.log(`Sua vida acabou.`)
                    this.vida = 0
                } else {
                    console.log(`Sua vida diminuiu -${b}.`)
                }
                console.log()
                prompt(`[ENTER]`)
            },
            aumentarAtaque: function(quantidade){
                console.log(`\nSeu ataque aumentou em +${quantidade}.`)
                this.ataque = ((20 * this.nivel) + quantidade)
                prompt("[ENTER]")
            },
            aumentarDefesa: function(quantidade){
                console.log(`\nSua defesa aumentou em +${quantidade}.`)
                this.defesa += quantidade
            },
            aumentarMagia: function(quantidade){
                console.log(`\nSua magia aumentou em +${quantidade}.\n`)
                this.magia += quantidade
                prompt(`[ENTER]`)
            },
            aumentarPontuacao: function(){
                this.pontuacao += 1
            },
            itemMapa: function(){
                this.mapa += 1
            },
            itemEspada: function(){
                this.espada += 1
            },
            itemCapa: function(){
                this.capa += 1
            },
            itemAmuleto: function(){
                this.amuleto += 1
            },
            aumentarGrupo: function(quantidade = 1){
                this.grupo += quantidade
                console.log(`\nSeu grupo aumentou em +${quantidade} membro. \nQuantidade atual: ${this.grupo} membros.\n`)
                prompt(`[ENTER]`)
            },
            aumentarTempo: function(quantidade = 1){
                this.tempo += quantidade
                console.log(`DIA ${this.tempo}`)
            },
            insultar: function(){
                let insultos = [`?? s?? isso que voc?? consegue fazer?`,
                `Vai precisar de uma arma maior que essa para me derrotar`,
                `Quem te ensinou a lutar desse jeito, sua vov??zinha?`,
                `Se houvessem mais 5 de voc??, ainda n??o conseguiriam me derrotar.`,
                `Quer que eu te d?? algumas aulas de luta?`,
                `Se continuarmos, s?? eu vou sair vivo dessa luta.`,
                `Est?? sendo um bom aquecimento, quando come??amos a luta?.`]
                console.log(`\nVoc?? disse: \n'${insultos[Math.floor(Math.random() * insultos.length)]}'\n`)
                prompt(`[ENTER]`)
            },
            opcoesDeJogada: function(a) {
                console.log()
                console.log(`Escolha uma das op????es: \n[1]Atacar \n[2]Insultar \n[3]Consultar Status`)
                let opcao = +prompt(`Op????o: `)
                while (opcao != 1 && opcao != 2 && opcao != 3) {
                    console.log("\nN??MERO INV??LIDO!")
                    console.log(`Escolha uma das op????es: \n[1]Atacar \n[2]Insultar \n[3]Consultar Status`)
                    opcao = +prompt(`Op????o: `)
                }
                if (opcao == 1) {
                    let numeroAleatorio = (Math.floor(Math.random() * this.ataque + 1))
                    while (numeroAleatorio < (this.ataque * 0.4)) {
                        numeroAleatorio = (Math.floor(Math.random() * this.ataque + 1))
                    }
                    if (a == "jhonny") {
                        jhonny.dano(numeroAleatorio)
                    } else if (a == 'amanda') {
                        amanda.dano(numeroAleatorio)
                    } else if (a == 'goblin') {
                        goblin.dano(numeroAleatorio)
                    } else if (a == 'elfoDaFloresta') {
                        elfoDaFloresta.dano(numeroAleatorio)
                    } else if (a == 'troll') {
                        troll.dano(numeroAleatorio)
                    } else if (a == 'dragao') {
                        dragao.dano(numeroAleatorio)
                    } else if (a == 'bruxa') {
                        bruxa.dano(numeroAleatorio)
                    } else if (a == 'cavaleiroFantasma') {
                        cavaleiroFantasma.dano(numeroAleatorio)
                    } else if (a == 'mordog') {
                        mordog.dano(numeroAleatorio)
                    } 
                    console.log()
                } else if (opcao == 2){
                    this.insultar()
                } else if (opcao == 3){
                    statusJogador.consultarStatus()
                    if (a == "jhonny") {
                        jhonny.consultarStatus()
                    } else if (a == 'amanda') {
                        amanda.consultarStatus()
                    } else if (a == 'goblin') {
                        goblin.consultarStatus()
                    } else if (a == 'elfoDaFloresta') {
                        elfoDaFloresta.consultarStatus()
                    } else if (a == 'troll') {
                        troll.consultarStatus()
                    } else if (a == 'dragao') {
                        dragao.consultarStatus()
                    } else if (a == 'bruxa') {
                        bruxa.consultarStatus()
                    } else if (a == 'cavaleiroFantasma') {
                        cavaleiroFantasma.consultarStatus()
                    } else if (a == 'mordog') {
                        mordog.consultarStatus()
                    }
                }
            }
        }
        const jhonny = {
            nome: 'Jhonny',
            nivel: 1,
            descricao: 'Seu melhor amigo.',
            vida: 100,
            ataque: 20,
            defesa: 10,
            dinheiro: 20,
            magia: 0,
            consultarStatus: function(){    
                console.log(`\nSTATUS DE JHONNY:`)
                console.log(`Nome: ${this.nome}`)
                console.log(`N??vel: ${this.nivel}`)
                console.log(`Descri????o: ${this.descricao}`)
                console.log(`Vida: ${this.vida}`)
                console.log(`Ataque: ${this.ataque}`)
                console.log(`Defesa: ${this.defesa}`)
                console.log(`Dinheiro: ${this.dinheiro}`)
                console.log(`Magia: ${this.magia}\n`)
                prompt(`[ENTER]`)
            },
            dano: function(quantidade){
                let a = quantidade - this.defesa
                let b = quantidade > this.defesa ? a : 0
                this.vida -= b
                console.log()
                if (b == 0){
                    console.log("Jhonny defendeu o ataque.")
                }
                if (this.vida <= 0) {
                    console.log(`A vida de Jhonny acabou.`)
                    this.vida = 0
                } else {
                    console.log(`Jhonny perdeu -${b} de vida.`)
                }
                console.log()
                prompt(`[ENTER]`)
            },
            aumentarAtaque: function(quantidade){
                console.log(`\nO ataque de Jhonny aumentou em +${quantidade}.\n`)
                this.ataque += quantidade
                prompt(`[ENTER]`)
            },
            aumentarDefesa: function(quantidade){
                console.log(`\nA defesa de Jhonny aumentou em +${quantidade}.\n`)
                this.defesa += quantidade
                prompt(`[ENTER]`)
            },
            jogada: function() {
                let numeroAleatorio = (Math.floor(Math.random() * this.ataque + 1))
                while (numeroAleatorio < (this.ataque * 0.2)) {
                    numeroAleatorio = (Math.floor(Math.random() * this.ataque + 1))
                }
                statusJogador.dano(numeroAleatorio)
            }
        }
        const amanda = {
            nome: 'Amanda',
            nivel: 1,
            descricao: 'Sua melhor amiga.',
            vida: 100,
            ataque: 20,
            defesa: 10,
            dinheiro: 20,
            magia: 0,
            consultarStatus: function(){    
                console.log(`\nSTATUS DE AMANDA:`)
                console.log(`Nome: ${this.nome}`)
                console.log(`N??vel: ${this.nivel}`)
                console.log(`Descri????o: ${this.descricao}`)
                console.log(`Vida: ${this.vida}`)
                console.log(`Ataque: ${this.ataque}`)
                console.log(`Defesa: ${this.defesa}`)
                console.log(`Dinheiro: ${this.dinheiro}`)
                console.log(`Magia: ${this.magia}\n`)
                prompt(`[ENTER]`)
            },
            dano: function(quantidade){
                let a = quantidade - this.defesa
                let b = quantidade > this.defesa ? a : 0
                this.vida -= b
                console.log()
                if (b == 0){
                    console.log("Amanda defendeu o ataque.")
                }
                if (this.vida <= 0) {
                    console.log(`A vida de Amanda acabou.`)
                    this.vida = 0
                } else {
                    console.log(`Amanda perdeu -${b} de vida.`)
                }
                console.log()
                prompt(`[ENTER]`)
            },
            aumentarAtaque: function(quantidade){
                console.log(`\nO ataque de Amanda aumentou em +${quantidade}.\n`)
                this.ataque += quantidade
                prompt(`[ENTER]`)
            },
            aumentarDefesa: function(quantidade){
                console.log(`\nA defesa de Amanda aumentou em +${quantidade}.\n`)
                this.defesa += quantidade
                prompt(`[ENTER]`)
            },
            jogada: function() {
                let numeroAleatorio = (Math.floor(Math.random() * this.ataque + 1))
                while (numeroAleatorio < (this.ataque * 0.2)) {
                    numeroAleatorio = (Math.floor(Math.random() * this.ataque + 1))
                }
                statusJogador.dano(numeroAleatorio)
            }
        }
        const goblin = {
            nome: 'Goblin',
            nivel: 1,
            descricao: 'Baixinho, musculoso e raivoso',
            vida: (100 * statusJogador.nivel),
            ataque: (20 * statusJogador.nivel),
            defesa: (10 * statusJogador.nivel),
            dinheiro: 23,
            magia: 0,
            ataques: ["Estocada mortal", "Soco agressivo", "Voadora do trov??o"],
            consultarStatus: function(){    
                console.log(`\nSTATUS DE GOBLIN:`)
                console.log(`Nome: ${this.nome}`)
                console.log(`N??vel: ${this.nivel}`)
                console.log(`Descri????o: ${this.descricao}`)
                console.log(`Vida: ${this.vida}`)
                console.log(`Ataque: ${this.ataque}`)
                console.log(`Defesa: ${this.defesa}`)
                console.log(`Dinheiro: ${this.dinheiro}`)
                console.log(`Magia: ${this.magia}\n`)
                prompt(`[ENTER]`)
            },
            dano: function(quantidade){
                let a = quantidade - this.defesa
                let b = quantidade > this.defesa ? a : 0
                this.vida -= b
                console.log()
                if (b == 0){
                    console.log("Goblin defendeu o ataque.")
                }
                if (this.vida <= 0) {
                    console.log(`A vida de Goblin acabou.`)
                    this.vida = 0
                } else {
                    console.log(`Goblin perdeu -${b} de vida.`)
                }
                console.log()
                prompt(`[ENTER]`)
            },
            jogada: function() {
                console.log(`\n${this.nome} usou ${this.ataques[Math.floor(Math.random() * 3)]}\n`)
                let numeroAleatorio = (Math.floor(Math.random() * this.ataque + 1))
                while (numeroAleatorio < (this.ataque * 0.2)) {
                    numeroAleatorio = (Math.floor(Math.random() * this.ataque + 1))
                }
                statusJogador.dano(numeroAleatorio)
            },
            alterarAtributos: function(numero = 0) {
                if (numero == 1) {
                    this.vida = (2 * statusJogador.vida)
                    this.defesa = (2 * statusJogador.defesa)
                    this.ataque = (2 * statusJogador.ataque)
                } else {
                    this.vida = (100 * statusJogador.nivel)
                    this.ataque = (20 * statusJogador.nivel)
                    this.defesa = (10 * statusJogador.nivel)
                }
            }
        }
        const elfoDaFloresta = {
            nome: 'Elfo da Floresta',
            nivel: 2,
            descricao: 'Lutador de artes marciais, possui extrema conex??o com a natureza.',
            vida: (100 * statusJogador.nivel),
            ataque: (20 * statusJogador.nivel),
            defesa: (10 * statusJogador.nivel),
            dinheiro: 60,
            magia: 30,
            ataques: ["Ataque da folha", "Golpe de karat??", "Flecha envenenada"],
            consultarStatus: function(){    
                console.log(`\nSTATUS DE ELFO DA FLORESTA:`)
                console.log(`Nome: ${this.nome}`)
                console.log(`N??vel: ${this.nivel}`)
                console.log(`Descri????o: ${this.descricao}`)
                console.log(`Vida: ${this.vida}`)
                console.log(`Ataque: ${this.ataque}`)
                console.log(`Defesa: ${this.defesa}`)
                console.log(`Dinheiro: ${this.dinheiro}`)
                console.log(`Magia: ${this.magia}\n`)
                prompt(`[ENTER]`)
            },
            dano: function(quantidade){
                let a = quantidade - this.defesa
                let b = quantidade > this.defesa ? a : 0
                this.vida -= b
                console.log()
                if (b == 0){
                    console.log("Elfo da Floresta defendeu o ataque.")
                }
                if (this.vida <= 0) {
                    console.log(`A vida de Elfo da Floresta acabou.`)
                    this.vida = 0
                } else {
                    console.log(`Elfo da Floresta perdeu -${b} de vida.`)
                }
                console.log()
                prompt(`[ENTER]`)
            },
            jogada: function() {
                console.log(`\n${this.nome} usou ${this.ataques[Math.floor(Math.random() * 3)]}\n`)
                let numeroAleatorio = (Math.floor(Math.random() * this.ataque + 1))
                while (numeroAleatorio < (this.ataque * 0.2)) {
                    numeroAleatorio = (Math.floor(Math.random() * this.ataque + 1))
                }
                statusJogador.dano(numeroAleatorio)
            },
            alterarAtributos: function(numero = 0) {
                if (numero == 1) {
                    this.vida = (2 * statusJogador.vida)
                    this.defesa = (2 * statusJogador.defesa)
                    this.ataque = (2 * statusJogador.ataque)
                } else {
                    this.vida = (100 * statusJogador.nivel)
                    this.ataque = (20 * statusJogador.nivel)
                    this.defesa = (10 * statusJogador.nivel)
                }
            }
        }
        const troll = {
            nome: 'Troll',
            nivel: 3,
            descricao: 'O que n??o possui de intelig??ncia, possui de for??a bruta.',
            vida: (100 * statusJogador.nivel),
            ataque: (20 * statusJogador.nivel),
            defesa: (10 * statusJogador.nivel),
            dinheiro: 82,
            magia: 0,
            ataques:["Mordida raivosa", "Punho girat??rio", "Cabe??ada atordoante"],
            consultarStatus: function(){    
                console.log(`\nSTATUS DE TROLL:`)
                console.log(`Nome: ${this.nome}`)
                console.log(`N??vel: ${this.nivel}`)
                console.log(`Descri????o: ${this.descricao}`)
                console.log(`Vida: ${this.vida}`)
                console.log(`Ataque: ${this.ataque}`)
                console.log(`Defesa: ${this.defesa}`)
                console.log(`Dinheiro: ${this.dinheiro}`)
                console.log(`Magia: ${this.magia}\n`)
                prompt(`[ENTER]`)
            },
            dano: function(quantidade){
                let a = quantidade - this.defesa
                let b = quantidade > this.defesa ? a : 0
                this.vida -= b
                console.log()
                if (b == 0){
                    console.log("Troll defendeu o ataque.")
                }
                if (this.vida <= 0) {
                    console.log(`A vida de Troll acabou.`)
                    this.vida = 0
                } else {
                    console.log(`Troll perdeu -${b} de vida.`)
                }
                console.log()
                prompt(`[ENTER]`)
            },
            jogada: function() {
                console.log(`\n${this.nome} usou ${this.ataques[Math.floor(Math.random() * 3)]}\n`)
                let numeroAleatorio = (Math.floor(Math.random() * this.ataque + 1))
                while (numeroAleatorio < (this.ataque * 0.2)) {
                    numeroAleatorio = (Math.floor(Math.random() * this.ataque + 1))
                }
                statusJogador.dano(numeroAleatorio)
            },
            alterarAtributos: function(numero = 0) {
                if (numero == 1) {
                    this.vida = (2 * statusJogador.vida)
                    this.defesa = (2 * statusJogador.defesa)
                    this.ataque = (2 * statusJogador.ataque)
                } else {
                    this.vida = (100 * statusJogador.nivel)
                    this.ataque = (20 * statusJogador.nivel)
                    this.defesa = (10 * statusJogador.nivel)
                }
            }
        }
        const dragao = {
            nome: 'Drag??o',
            nivel: 4,
            descricao: 'Ser elegante que voa e gospe fogo.',
            vida: (100 * statusJogador.nivel),
            ataque: (20 * statusJogador.nivel),
            defesa: (10 * statusJogador.nivel),
            dinheiro: 0,
            magia: 10,
            ataques:["Bola de fogo", "Ataque a??reo", "Fogo mortal"],
            consultarStatus: function(){    
                console.log(`\nSTATUS DE DRAG??O:`)
                console.log(`Nome: ${this.nome}`)
                console.log(`N??vel: ${this.nivel}`)
                console.log(`Descri????o: ${this.descricao}`)
                console.log(`Vida: ${this.vida}`)
                console.log(`Ataque: ${this.ataque}`)
                console.log(`Defesa: ${this.defesa}`)
                console.log(`Dinheiro: ${this.dinheiro}`)
                console.log(`Magia: ${this.magia}\n`)
                prompt(`[ENTER]`)
            },
            dano: function(quantidade){
                let a = quantidade - this.defesa
                let b = quantidade > this.defesa ? a : 0
                this.vida -= b
                console.log()
                if (b == 0){
                    console.log("Drag??o defendeu o ataque.")
                }
                if (this.vida <= 0) {
                    console.log(`A vida de Drag??o acabou.`)
                    this.vida = 0
                } else {
                    console.log(`Drag??o perdeu -${b} de vida.`)
                }
                console.log()
                prompt(`[ENTER]`)
            },
            jogada: function() {
                console.log(`\n${this.nome} usou ${this.ataques[Math.floor(Math.random() * 3)]}\n`)
                let numeroAleatorio = (Math.floor(Math.random() * this.ataque + 1))
                while (numeroAleatorio < (this.ataque * 0.2)) {
                    numeroAleatorio = (Math.floor(Math.random() * this.ataque + 1))
                }
                statusJogador.dano(numeroAleatorio)
            },
            alterarAtributos: function(numero = 0) {
                if (numero == 1) {
                    this.vida = (2 * statusJogador.vida)
                    this.defesa = (2 * statusJogador.defesa)
                    this.ataque = (2 * statusJogador.ataque)
                } else {
                    this.vida = (100 * statusJogador.nivel)
                    this.ataque = (20 * statusJogador.nivel)
                    this.defesa = (10 * statusJogador.nivel)
                }
            }
        }
        const bruxa = {
            nome: 'Bruxa',
            nivel: 5,
            descricao: 'Feiticeira nata, inteligente e cartomante nas horas vagas.',
            vida: (100 * statusJogador.nivel),
            ataque: (20 * statusJogador.nivel),
            defesa: (10 * statusJogador.nivel),
            dinheiro: 320,
            magia: 200,
            ataques: ["Invoca????o de esqueletos", "Po????o explosiva", "Feiti??o venenoso"],
            consultarStatus: function(){    
                console.log(`\nSTATUS DE BRUXA:`)
                console.log(`Nome: ${this.nome}`)
                console.log(`N??vel: ${this.nivel}`)
                console.log(`Descri????o: ${this.descricao}`)
                console.log(`Vida: ${this.vida}`)
                console.log(`Ataque: ${this.ataque}`)
                console.log(`Defesa: ${this.defesa}`)
                console.log(`Dinheiro: ${this.dinheiro}`)
                console.log(`Magia: ${this.magia}\n`)
                prompt(`[ENTER]`)
            },
            dano: function(quantidade){
                let a = quantidade - this.defesa
                let b = quantidade > this.defesa ? a : 0
                this.vida -= b
                console.log()
                if (b == 0){
                    console.log("Bruxa defendeu o ataque.")
                }
                if (this.vida <= 0) {
                    console.log(`A vida de Bruxa acabou.`)
                    this.vida = 0
                } else {
                    console.log(`Bruxa perdeu -${b} de vida.`)
                }
                console.log()
                prompt(`[ENTER]`)
            },
            jogada: function() {
                console.log(`\n${this.nome} usou ${this.ataques[Math.floor(Math.random() * 3)]}\n`)
                let numeroAleatorio = (Math.floor(Math.random() * this.ataque + 1))
                while (numeroAleatorio < (this.ataque * 0.2)) {
                    numeroAleatorio = (Math.floor(Math.random() * this.ataque + 1))
                }
                statusJogador.dano(numeroAleatorio)
            },
            alterarAtributos: function(numero = 0) {
                if (numero == 1) {
                    this.vida = (2 * statusJogador.vida)
                    this.defesa = (2 * statusJogador.defesa)
                    this.ataque = (2 * statusJogador.ataque)
                } else {
                    this.vida = (100 * statusJogador.nivel)
                    this.ataque = (20 * statusJogador.nivel)
                    this.defesa = (10 * statusJogador.nivel)
                }
            }
        }
        const cavaleiroFantasma = {
            nome: 'Cavaleiro Fantasma',
            nivel: 6,
            descricao: 'Guerreiro forte e muito habilidoso com sua espada.',
            vida: (100 * statusJogador.nivel),
            ataque: (20 * statusJogador.nivel),
            defesa: (10 * statusJogador.nivel),
            dinheiro: 210,
            magia: 50,
            ataques: ["Espada de fogo", "L??mina da morte", "Investida r??pida"],
            consultarStatus: function(){    
                console.log(`\nSTATUS DE CAVALEIRO FANTASMA:`)
                console.log(`Nome: ${this.nome}`)
                console.log(`N??vel: ${this.nivel}`)
                console.log(`Descri????o: ${this.descricao}`)
                console.log(`Vida: ${this.vida}`)
                console.log(`Ataque: ${this.ataque}`)
                console.log(`Defesa: ${this.defesa}`)
                console.log(`Dinheiro: ${this.dinheiro}`)
                console.log(`Magia: ${this.magia}\n`)
                prompt(`[ENTER]`)
            },
            dano: function(quantidade){
                let a = quantidade - this.defesa
                let b = quantidade > this.defesa ? a : 0
                this.vida -= b
                console.log()
                if (b == 0){
                    console.log("Cavaleiro Fantasma defendeu o ataque.")
                }
                if (this.vida <= 0) {
                    console.log(`A vida de Cavaleiro Fantasma acabou.`)
                    this.vida = 0
                } else {
                    console.log(`Cavaleiro Fantasma perdeu -${b} de vida.`)
                }
                console.log()
                prompt(`[ENTER]`)
            },
            jogada: function() {
                console.log(`\n${this.nome} usou ${this.ataques[Math.floor(Math.random() * 3)]}\n`)
                let numeroAleatorio = (Math.floor(Math.random() * this.ataque + 1))
                while (numeroAleatorio < (this.ataque * 0.2)) {
                    numeroAleatorio = (Math.floor(Math.random() * this.ataque + 1))
                }
                statusJogador.dano(numeroAleatorio)
            },
            alterarAtributos: function(numero = 0) {
                if (numero == 1) {
                    this.vida = (2 * statusJogador.vida)
                    this.defesa = (2 * statusJogador.defesa)
                    this.ataque = (2 * statusJogador.ataque)
                } else {
                    this.vida = (100 * statusJogador.nivel)
                    this.ataque = (20 * statusJogador.nivel)
                    this.defesa = (10 * statusJogador.nivel)
                }
            }
        }
        const mordog = {
            nome: 'Mordog',
            nivel: 'Infinito(???)',
            descricao: 'Bruxo com o poder equivalente a 1 milh??o de almas.',
            vida: (100 * statusJogador.nivel),
            ataque: (20 * statusJogador.nivel),
            defesa: (10 * statusJogador.nivel),
            dinheiro: 1000100,
            magia: 9999999,
            ataques: ["Feiti??o venenoso", "Raio el??trico", "Bola de fogo", "Feiti??o mortal", "Po????o explosiva", "Po????o atordoante", "Ataque telecin??tico"],
            consultarStatus: function(){    
                console.log(`\nSTATUS DE MORDOG:`)
                console.log(`Nome: ${this.nome}`)
                console.log(`N??vel: ${this.nivel}`)
                console.log(`Descri????o: ${this.descricao}`)
                console.log(`Vida: ${this.vida}`)
                console.log(`Ataque: ${this.ataque}`)
                console.log(`Defesa: ${this.defesa}`)
                console.log(`Dinheiro: ${this.dinheiro}`)
                console.log(`Magia: ${this.magia}\n`)
                prompt(`[ENTER]`)
            },
            dano: function(quantidade){
                let a = quantidade - this.defesa
                let b = quantidade > this.defesa ? a : 0
                this.vida -= b
                console.log()
                if (b == 0){
                    console.log("Mordog defendeu o ataque.")
                }
                if (this.vida <= 0) {
                    console.log(`A vida de Mordog acabou.`)
                    this.vida = 0
                } else {
                    console.log(`Mordog perdeu -${b} de vida.`)
                }
                console.log()
                prompt(`[ENTER]`)
            },
            jogada: function() {
                console.log(`\n${this.nome} usou ${this.ataques[Math.floor(Math.random() * this.ataques.length)]}\n`)
                let numeroAleatorio = (Math.floor(Math.random() * this.ataque + 1))
                while (numeroAleatorio < (this.ataque * 0.2)) {
                    numeroAleatorio = (Math.floor(Math.random() * this.ataque + 1))
                }
                statusJogador.dano(numeroAleatorio)
            },
            alterarAtributos: function(numero = 0) {
                if (numero == 1) {
                    this.vida = statusJogador.vida
                    this.defesa =  statusJogador.defesa
                    this.ataque =  statusJogador.ataque
                } else {
                    this.vida = (100 * statusJogador.nivel)
                    this.ataque = (20 * statusJogador.nivel)
                    this.defesa = (10 * statusJogador.nivel)
                }
            }
        }
        function alteracao(b){
            b.nivel = 1
            b.vida = 100
            b.ataque = 40
            b.defesa = 10 
            b.dinheiro = 0
            b.magia = 0
        }
        console.log("A JORNADA DO HER??I \nUma Fic????o Interativa \n=====================")
        let jogador = prompt("Digite o nome do(a) jogador(a) para come??ar: ")
        while (jogador.length < 3) {
            console.log("\nDigite um nome de, pelo menos, 3 letras.")
            jogador = prompt("Digite o nome do(a) jogador(a) para come??ar: ")
        }
        statusJogador.nome = jogador
        console.log("\nOP????ES DE PERSONAGENS: \n[1] Um grande guerreiro, forte e destemido, em busca de uma boa aventura. \n[2] Uma guerreira habilidosa e valente, em busca de sua jornada para se tornar hero??na.\n")
        let personagem = +prompt("Escolha um personagem. N??mero [1] ou [2]: ")
        while (personagem != 1 && personagem != 2) {
            console.log("\nN??MERO INV??LIDO!")
            personagem = +prompt("Escolha um personagem. N??mero [1] ou [2]: ")
        }
        console.clear()
        const modosdDeJogo = ["Escolha um modo de jogo:", "[1]MODO HIST??RIA - Entre em uma aventura ??pica", "[2]MODO SOBREVIV??NCIA - Batalhe at?? se cansar"]
        for (let n of modosdDeJogo){
            console.log(n)
            console.log()
        }
        let escolhaModo = +prompt("N??mero: ")
        while (escolhaModo != 1 && escolhaModo != 2){
            console.log("\nN??MERO INV??LIDO!")
            escolhaModo = +prompt("N??mero: ")
        }
        dia1: while (escolhaModo == 1) {
            dia++
            statusJogador.consultarStatus()
            console.clear()
            statusJogador.aumentarTempo()
            console.log("======== \nO IN??CIO")
            const intro1 = ["\nEra uma linda semana de primavera na terra de Blue, os p??ssaros cantavam, as flores desabrochavam e as pessoas estavam felizem e em paz....", "\nVoc??, um conhecido guerreiro forte e destemido, teve de partir momentaneamente para ir comprar especiarias na cidade vizinha...", "\nDurante o caminho de volta, ao ver sua cidade surgindo no horizonte, percebe fuma??a e destrui????o em grande parte dela. Voc?? acelera seu cavalo...", `\nAo entrar em sua cidade, um guarda real v??m ao seu encontro e diz: \n'${statusJogador.nome}, nosso rei precisa de sua presen??a o mais r??pido poss??vel!'`, "\nAp??s uma breve conversa com o rei de Blue, descobre que o ataque ?? cidade foi feito pelo poderoso bruxo Mordog, o qual rouba a alma dos seres vivos para aumentar seu poder...", `\nO rei disse: \n'Dessa vez conseguimos conter Mordog e seu ex??rcito, mas com as almas que ele conseguiu tememos que venha mais forte da pr??xima vez.'`, `\n'${statusJogador.nome}, voc?? j?? fez parte de minha guarda real, ?? o ??nico guerreiro que pode deter Mordog!'`]
            const intro2 = ["\nEra uma linda semana de primavera na terra de Blue, os p??ssaros cantavam, as flores desabrochavam e as pessoas estavam felizem e em paz....", "\nVoc??, uma guerreira habilidosa e valente, teve de partir momentaneamente para ir comprar especiarias na cidade vizinha...", "\nDurante o caminho de volta, ao ver sua cidade surgindo no horizonte, percebe fuma??a e destrui????o em grande parte dela. Voc?? acelera seu cavalo...", `\nAo entrar em sua cidade, um guarda real v??m ao seu encontro e diz: \n'${statusJogador.nome}, nosso rei precisa de sua presen??a o mais r??pido poss??vel!'`, "\nAp??s uma breve conversa com o rei de Blue, descobre que o ataque ?? cidade foi feito pelo poderoso bruxo Mordog, o qual rouba a alma dos seres vivos para aumentar seu poder...", `\nO rei disse: \n'Dessa vez conseguimos conter Mordog e seu ex??rcito, mas com as almas que ele conseguiu tememos que venha mais forte da pr??xima vez.'`, `\n'${statusJogador.nome}, voc?? j?? fez parte de minha guarda real, ?? a ??nica guerreira que pode deter Mordog!`]
            if (personagem == 1) {
                for (let i of intro1) {
                    console.log(i)
                    prompt("[ENTER]")
                }
            } else {
                for (let i of intro2) {
                    console.log(i)
                    prompt("[ENTER]")
                }
            }
            console.clear()
            console.log("Voc?? aceita a miss??o de ir atr??s do bruxo. Antes de deixar o sal??o, o rei lhe oferece um mapa de onde possivelmente Mordog se esconde.\n")
            let a = +prompt("Voc?? pega o mapa? 1.[SIM] 2.[N??O]: ")
            while (a != 1 && a != 2) {
                console.log("\nN??MERO INV??LIDO!")
                a = +prompt("Voc?? pega o mapa? 1.[SIM] 2.[N??O]: ")
            }
            if (a == 1) {
                prompt("\nVoc?? pega o mapa e parte. [ENTER]")
                statusJogador.mapa += 1
                statusJogador.pontuacao += 1
            } else if ( a == 2) {
                prompt("\nVoc?? diz:\n'N??o preciso de mapas, j?? sei o caminho!' \n e parte. [ENTER]")
            }
            console.clear()
            console.log("Voc?? vai at?? sua casa e come??a a se aprontar para a miss??o.\n")
            let b = +prompt("Vai levar sua espada? (o jogo ficar?? mais dif??cil sem ela) 1.[SIM] 2.[N??O]: ")
            while (b != 1 && b != 2) {
                console.log("\nN??MERO INV??LIDO!")
                b = +prompt("Vai levar sua espada? 1.[SIM] 2.[N??O]: ")
            }
            if (b == 1) {
                prompt("\nVoc?? pega sua espada. [ENTER]")
                statusJogador.aumentarAtaque(15)
                statusJogador.pontuacao += 1
                statusJogador.espada += 1
            } else if ( b == 2) {
                prompt("\nVoc?? confia muito em seus punhos e decide n??o levar sua espada. [ENTER]")
            }
            console.clear()
            console.log("Voc?? se lembra do alerta que o rei lhe deu sobre o perigoso drag??o que comp??e o ex??rcito de Mordog.\n")
            let c = +prompt("Vai levar sua capa contra fogo? 1.[SIM] 2.[N??O]: ")
            while (c != 1 && c != 2) {
                console.log("\nN??MERO INV??LIDO!")
                c = +prompt("Vai levar sua capa contra fogo? 1.[SIM] 2.[N??O]: ")
            }
            if (c == 1) {
                console.log("\nVoc?? veste sua linda capa contra fogo.\n")
                prompt("Prote????o contra fogo adicionada. [ENTER]")
                statusJogador.pontuacao += 1
                statusJogador.capa += 1
            } else if ( c == 2) {
                prompt("\nVoc?? escolhe priorizar a agilidade e decide deixar sua armadura leve. [ENTER]")
            }
            console.clear()
            console.log()
            prompt("Ap??s arrumar todas as coisas, visita seu vizinho elfo, que entende um pouco de magia e aben??oa seu caminho. [ENTER]")
            console.log("\nEle disse, lhe oferecendo um colar e um frasco: \n'Use esse amuleto em seu pesco??o, vai proteger contra os feiti??os do bruxo.'")
            console.log("'Leve tamb??m essa po????o de cura, ela pode ser muito ??til em algum momento.'\n")
            let d = +prompt("Voc?? leva o amuleto e a po????o? 1.[SIM] 2.[N??O]: ")
            while (d != 1 && d != 2) {
                console.log("\nN??MERO INV??LIDO!")
                d = +prompt("Voc?? leva o amuleto e as po????o? 1.[SIM] 2.[N??O]: ")
            }
            if (d == 1) {
                prompt("\nVoc?? agradece pelos presentes, e coloca o amuleto em seu pesco??o. [ENTER]")
                statusJogador.aumentarMagia(20)
                statusJogador.pontuacao += 1
                statusJogador.amuleto += 1
                statusJogador.pocao += 1
            } else if ( d == 2) {
                prompt("\nVoc?? agradece pela ben????o, mas escolhe n??o levar os itens. [ENTER]")
            }
            console.clear()
            if (personagem == 1) {
                console.log("\nPor um breve momento voc?? pensa que, mesmo com toda sua habilidade e determina????o, talvez seja dif??cil completar a miss??o sozinho.")
                console.log("Voc?? pensa em Jhonny, seu amigo que, assim como voc??, gosta de uma boa aventura e pode ajudar.\n")
                let e = +prompt("Voc?? convida Jhonny? 1.[SIM] 2.[N??O]: ")
                while (e != 1 && e != 2) {
                console.log("\nN??MERO INV??LIDO!")
                e = +prompt("Voc?? convida Jhonny? 1.[SIM] 2.[N??O]: ")
            }
            if (e == 1) {
                prompt("\nVoc?? decide chamar seu amigo.[ENTER]")
                statusJogador.pontuacao += 1
                statusJogador.grupo += 1
                console.clear()
                console.log("\nJhonny diz que j?? faz muito tempo que n??o participa de uma batalha, voc??s decidem simular uma luta para testar isso.")
                prompt("[ENTER]")
                console.log("\nVoc??s se dirigem at?? uma ??rea aberta e, sem espadas, come??am a luta.")
                console.log("Voc?? diz: \n'Me mostre o que voc?? sabe fazer!'")
                prompt("[ENTER]")
                backup(1,statusJogador)
                backup2(1,jhonny)
                alteracao(statusJogador)
                rodada = 0
                while(true){
                    rodada++
                    console.clear()
                    console.log(`RODADA ${rodada}:`)
                    console.log("===========")
                    console.log()
                    console.log("Jhonny ataca.")
                    jhonny.jogada()
                    console.log(`\nVida ${statusJogador.nome}: ${statusJogador.vida}`)
                    console.log(`Vida ${jhonny.nome}: ${jhonny.vida}`)
                    if (statusJogador.vida <= 0) {
                        console.log("\nVOC?? MORREU.")
                        backup(2,statusJogador)
                        let z = +prompt("\nGostaria de jogar o cap??tulo novamente? [1]SIM [2]N??O: ")
                        while (z != 1 && z != 2) {
                            console.log("\nN??MERO INV??LIDO!")
                            z = +prompt("Gostaria de jogar o cap??tulo novamente? [1]SIM [2]N??O: ")
                        }
                        if (z == 1){
                            continue dia1
                        } else {
                        break jogo
                        }
                    }
                    statusJogador.opcoesDeJogada('jhonny')
                    if (jhonny.vida <= 50) {
                        break
                    } 
                }
                backup(2,statusJogador)
                backup2(2,jhonny)
                console.clear()
                console.log("'De fato n??o estou mais t??o em forma como antigamente' \nDisse Jhonny.")
                console.log("\nPor conta disso, seu amigo concorda em ajudar na viagem, ficando encarregado de cuidar dos mantimentos, enquanto voc?? cuida dos inimigos.")
                prompt("[ENTER]")
                statusJogador.aumentarGrupo()
                console.log()
                prompt("Voc??s partir??o no dia seguinte. [ENTER]")
            } else if ( e == 2) {
                prompt("\nVoc?? decide n??o chamar seu amigo e se prepara para partir no dia seguinte. [ENTER]")
            }
            } else {
                console.log("\nPor um breve momento, voc?? pensa que, mesmo com toda sua habilidade e determina????o, talvez seja dif??cil completar a miss??o sozinha.")
                console.log("Voc?? pensa em Amanda, sua amiga que, assim como voc??, gosta de uma boa aventura e pode ajudar.\n")
                let e = +prompt("Voc?? convida Amanda? 1.[SIM] 2.[N??O]: ")
                while (e != 1 && e != 2) {
                console.log("\nN??MERO INV??LIDO!")
                e = +prompt("Voc?? convida Amanda? 1.[SIM] 2.[N??O]: ")
            }
            if (e == 1) {
                prompt("\nVoc?? decide chamar sua amiga. [ENTER]")
                statusJogador.pontuacao += 1
                statusJogador.grupo += 1
                console.clear()
                console.log("\nAmanda diz que j?? faz muito tempo que n??o participa de uma batalha, voc??s decidem simular uma luta para testar isso.")
                prompt("[ENTER]")
                console.log("\nVoc??s se dirigem at?? uma ??rea aberta e, sem espadas, come??am a luta.")
                console.log("Voc?? diz: \n'Me mostre o que voc?? sabe fazer!'")
                prompt("[ENTER]")
                backup2(1,amanda)
                backup(1,statusJogador)
                alteracao(statusJogador)
                rodada = 0
                while(true){
                    rodada++
                    console.clear()
                    console.log(`RODADA ${rodada}:`)
                    console.log("===========")
                    console.log()
                    console.log("Amanda ataca.")
                    amanda.jogada()
                    console.log(`\nVida ${statusJogador.nome}: ${statusJogador.vida}`)
                    console.log(`Vida ${amanda.nome}: ${amanda.vida}`)
                    if (statusJogador.vida <= 0) {
                        console.log("\nVOC?? MORREU.")
                        backup(2,statusJogador)
                        let z = +prompt("\nGostaria de jogar o cap??tulo novamente? [1]SIM [2]N??O: ")
                        while (z != 1 && z != 2) {
                            console.log("\nN??MERO INV??LIDO!")
                            z = +prompt("Gostaria de jogar o cap??tulo novamente? [1]SIM [2]N??O: ")
                        }
                        if (z == 1){
                            continue dia1
                        } else {
                        break jogo
                        }
                    }
                    statusJogador.opcoesDeJogada('amanda')
                    if (amanda.vida <= 50) {
                        break
                    }
                }
                backup(2,statusJogador)
                backup2(1,amanda)
                console.clear()
                console.log("'De fato n??o estou mais t??o em forma como antigamente' \nDisse Amanda.")
                console.log("\nPor conta disso, sua amiga concorda em ajudar na viagem, ficando encarregada de cuidar dos mantimentos, enquanto voc?? cuida dos inimigos.")
                prompt("[ENTER]")
                statusJogador.aumentarGrupo()
                console.log()
                prompt("Voc??s partir??o no dia seguinte. [ENTER]")
            } else if ( e == 2) {
                prompt("\nVoc?? decide n??o chamar sua amiga e se prepara para partir no dia seguinte. [ENTER]")
            }
            }
        break
        }
        dia2: while (escolhaModo == 1) {
            dia++
            console.clear()
            statusJogador.aumentarTempo()
            console.log("================ \nA AVENTURA COME??A")
            if (personagem == 1) {
                if (statusJogador.grupo >= 1) {
                    console.log("\nAo deixar a cidade voc??s sabem que esse pode ser um caminho sem volta...")
                    prompt("Mas sua paix??o pela aventura e vontade de salvar seu povo falam mais alto. [ENTER]")
                    console.clear()
                    console.log("Voc??s conversam enquanto caminham at?? seu objetivo:")
                    prompt("[ENTER]")
                    console.log(`\n'Sabe ${statusJogador.nome}, ouvi dizer que o ex??rcito de Mordog t??m apenas 6 guerreiros, ?? realmente impressionante como ele consegue causar tanta destrui????o...'`)
                    console.log("Disse Jhonny.")
                    if (statusJogador.mapa == 1) {
                        prompt("\nVoc??s encontram facilmente seu caminho seguindo o mapa. [ENTER]")
                    } else {
                        prompt("[ENTER]")
                    }
                } else {
                    console.log("\nAo deixar a cidade voc?? sabe que esse pode ser um caminho sem volta...")
                    prompt("Mas sua paix??o pela aventura e vontade de salvar seu povo falam mais alto. [ENTER]")
                    console.clear()
                    console.log("Voc?? pensa caminham at?? seu objetivo:")
                    prompt("[ENTER]")
                    console.log("\n'Ouvi dizer que o ex??rcito de Mordog t??m apenas 6 guerreiros, ?? realmente impressionante como ele consegue causar tanta destrui????o...'")
                    if (statusJogador.mapa == 1) {
                        prompt("\nVoc??s encontra facilmente seu caminho seguindo o mapa. [ENTER]")
                    } else {
                        prompt("[ENTER]")
                    }
                }
            } else {
                if (statusJogador.grupo >= 1) {
                    console.log("\nAo deixar a cidade voc??s sabem que esse pode ser um caminho sem volta...")
                    prompt("Mas sua paix??o pela aventura e vontade de salvar seu povo falam mais alto. [ENTER]")
                    console.clear()
                    console.log("Voc??s conversam enquanto caminham at?? seu objetivo:")
                    prompt("[ENTER]")
                    console.log(`\n'Sabe ${statusJogador.nome}, ouvi dizer que o ex??rcito de Mordog t??m apenas 6 guerreiros, ?? realmente impressionante como ele consegue causar tanta destrui????o...'`)
                    console.log("Disse Amanda.")
                    if (statusJogador.mapa == 1) {
                        prompt("\nVoc??s encontram facilmente seu caminho seguindo o mapa. [ENTER]")
                    } else {
                        prompt("[ENTER]")
                    }
                } else {
                    console.log("\nAo deixar a cidade voc?? sabe que esse pode ser um caminho sem volta...")
                    prompt("Mas sua paix??o pela aventura e vontade de salvar seu povo falam mais alto. [ENTER]")
                    console.clear()
                    console.log("Voc?? pensa caminham at?? seu objetivo:")
                    prompt("[ENTER]")
                    console.log("\n'Ouvi dizer que o ex??rcito de Mordog t??m apenas 6 guerreiros, ?? realmente impressionante como ele consegue causar tanta destrui????o...'")
                    if (statusJogador.mapa == 1) {
                        prompt("\nVoc?? encontram facilmente seu caminho seguindo o mapa. [ENTER]")
                    } else {
                        prompt("[ENTER]")
                    }
                }
            }
            console.clear()
            if (personagem == 1) {
                if (statusJogador.grupo >= 1) {
                    prompt("No caminho voc??s se deparam com uma ser baixinho e musculoso que os recebe aos gritos: [ENTER]")
                    console.log("\n'Sou o guerreiro Goblin do ex??rcito de Mordog, voc??s jamais passar??o por mim!'")
                    prompt("Disse o Goblin se lan??ando contra voc??s de maneira deselegante. [ENTER]")
                    if (statusJogador.espada == 1) {
                        prompt("\nVoc?? saca sua espada... [ENTER]")
                    }
                    backup(1,statusJogador)
                    goblin.alterarAtributos()
                    rodada = 0
                    while(true){
                        rodada++
                        console.clear()
                        console.log(`RODADA ${rodada}:`)
                        console.log("===========")
                        console.log()
                        console.log("Goblin ataca.")
                        goblin.jogada()
                        console.log(`\nVida ${statusJogador.nome}: ${statusJogador.vida}`)
                        console.log(`Vida ${goblin.nome}: ${goblin.vida}`)
                        if (statusJogador.vida <= 0) {
                            console.log("\nVOC?? MORREU.")
                            backup(2,statusJogador)
                            let z = +prompt("Gostaria de jogar o cap??tulo novamente? [1]SIM [2]N??O: ")
                            while (z != 1 && z != 2) {
                                console.log("\nN??MERO INV??LIDO!")
                                z = +prompt("Gostaria de jogar o cap??tulo novamente? [1]SIM [2]N??O: ")
                            }
                            if (z == 1){
                                continue dia2
                            } else {
                            break jogo
                            }
                        }
                        statusJogador.opcoesDeJogada('goblin')
                        if (goblin.vida <= 0) {
                            break
                        }
                    }
                    backup(2,statusJogador)
                } else {
                    prompt("No caminho voc?? se depara com uma ser baixinho e musculoso que o recebe aos gritos: [ENTER]")
                    console.log("\n'Sou o guerreiro Goblin do ex??rcito de Mordog, voc?? jamais passar?? por mim!'")
                    prompt("Disse o Goblin se lan??ando contra voc?? de maneira deselegante. [ENTER]")
                    if (statusJogador.espada == 1) {
                        prompt("\nVoc?? saca sua espada... [ENTER]")
                    }
                    backup(1,statusJogador)
                    goblin.alterarAtributos()
                    rodada = 0
                    while(true){
                        rodada++
                        console.clear()
                        console.log(`RODADA ${rodada}:`)
                        console.log("===========")
                        console.log()
                        console.log("Goblin ataca.")
                        goblin.jogada()
                        console.log(`\nVida ${statusJogador.nome}: ${statusJogador.vida}`)
                        console.log(`Vida ${goblin.nome}: ${goblin.vida}`)
                        if (statusJogador.vida <= 0) {
                            console.log("\nVOC?? MORREU.")
                            backup(2,statusJogador)
                            let z = +prompt("Gostaria de jogar o cap??tulo novamente? [1]SIM [2]N??O: ")
                            while (z != 1 && z != 2) {
                                console.log("\nN??MERO INV??LIDO!")
                                z = +prompt("Gostaria de jogar o cap??tulo novamente? [1]SIM [2]N??O: ")
                            }
                            if (z == 1){
                                continue dia2
                            } else {
                            break jogo
                            }
                        }
                        statusJogador.opcoesDeJogada('goblin')
                        if (goblin.vida <= 0) {
                            break
                        }
                    }
                    backup(2,statusJogador)
                }
            } else if (personagem == 2) {
                if (statusJogador.grupo >= 1) {
                    prompt("No caminho voc??s se deparam com uma ser baixinho e musculoso que as recebe aos gritos: [ENTER]")
                    console.log("\n'Sou o guerreiro Goblin do ex??rcito de Mordog, voc??s jamais passar??o por mim!'")
                    prompt("Disse o Goblin se lan??ando contra voc??s de maneira deselegante. [ENTER]")
                    if (statusJogador.espada == 1) {
                        prompt("\nVoc?? saca sua espada... [ENTER]")
                    }
                    backup(1,statusJogador)
                    goblin.alterarAtributos()
                    rodada = 0
                    while(true){
                        rodada++
                        console.clear()
                        console.log(`RODADA ${rodada}:`)
                        console.log("===========")
                        console.log()
                        console.log("Goblin ataca.")
                        goblin.jogada()
                        console.log(`\nVida ${statusJogador.nome}: ${statusJogador.vida}`)
                        console.log(`Vida ${goblin.nome}: ${goblin.vida}`)
                        if (statusJogador.vida <= 0) {
                            console.log("\nVOC?? MORREU.")
                            backup(2,statusJogador)
                            let z = +prompt("Gostaria de jogar o cap??tulo novamente? [1]SIM [2]N??O: ")
                            while (z != 1 && z != 2) {
                                console.log("\nN??MERO INV??LIDO!")
                                z = +prompt("Gostaria de jogar o cap??tulo novamente? [1]SIM [2]N??O: ")
                            }
                            if (z == 1){
                                continue dia2
                            } else {
                            break jogo
                            }
                        }
                        statusJogador.opcoesDeJogada('goblin')
                        if (goblin.vida <= 0) {
                            break
                        }
                    }
                    backup(2,statusJogador)
                } else {
                    prompt("No caminho voc?? se depara com uma ser baixinho e musculoso que a recebe aos gritos: [ENTER]")
                    console.log("\n'Sou o guerreiro Goblin do ex??rcito de Mordog, voc?? jamais passar?? por mim!'")
                    prompt("Disse o Goblin se lan??ando contra voc?? de maneira deselegante. [ENTER]")
                    if (statusJogador.espada == 1) {
                        prompt("\nVoc?? saca sua espada... [ENTER]")
                    }
                    backup(1,statusJogador)
                    goblin.alterarAtributos()
                    rodada = 0
                    while(true){
                        rodada++
                        console.clear()
                        console.log(`RODADA ${rodada}:`)
                        console.log("===========")
                        console.log()
                        console.log("Goblin ataca.")
                        goblin.jogada()
                        console.log(`\nVida ${statusJogador.nome}: ${statusJogador.vida}`)
                        console.log(`Vida ${goblin.nome}: ${goblin.vida}`)
                        if (statusJogador.vida <= 0) {
                            console.log("\nVOC?? MORREU.")
                            backup(2,statusJogador)
                            let z = +prompt("Gostaria de jogar o cap??tulo novamente? [1]SIM [2]N??O: ")
                            while (z != 1 && z != 2) {
                                console.log("\nN??MERO INV??LIDO!")
                                z = +prompt("Gostaria de jogar o cap??tulo novamente? [1]SIM [2]N??O: ")
                            }
                            if (z == 1){
                                continue dia2
                            } else {
                            break jogo
                            }
                        }
                        statusJogador.opcoesDeJogada('goblin')
                        if (goblin.vida <= 0) {
                            break
                        }
                    }
                    backup(2,statusJogador)
                }
            }
            console.clear()
            console.log("'N??o consigo acreditar que fui derrotado por um humano...'")
            console.log("Disse o Goblin sem conseguir acreditar que tinha sido derrotado.\n")
            let escolha1 = +prompt("O que voc?? faz? [1]MATAR [2]POUPAR: ")
            while(escolha1 != 1 && escolha1 != 2) {
                console.log("\nN??MERO INV??LIDO!")
                escolha1 = +prompt("O que voc?? faz? [1]MATAR [2]POUPAR: ")
            }
            if (escolha1 == 1){
                console.log("\nVoc?? mata o inimigo e segue seu caminho.")
                kills++
            } else if (escolha1 == 2){
                console.clear()
                console.log()
                prompt("'O qu??? Voc?? est?? me poupando?' [ENTER]")
                console.log()
                prompt("'Pois ent??o deixe-me contar um segredo sobre meu mestre...' [ENTER]")
                prompt("'Mordog ?? extremamente poderoso, mesmo que consiga chegar at?? ele, ?? imposs??vel derrot??-lo com todas as almas que ele j?? possui.' [ENTER]")
                if (statusJogador.grupo >= 1) {
                    console.log("\n'Mas talvez voc??s tenham alguma chance enquanto ele se recupera da ??ltima batalha, voc??s t??m apenas 6 dias.'\n")
                } else {
                    console.log("\n'Mas talvez voc?? tenha alguma chance enquanto ele se recupera da ??ltima batalha, voc?? t??m apenas 6 dias.'\n")
                }
                prompt("O Goblin sai correndo e desaparece na floresta. [ENTER]")
            }
            statusJogador.aumentarNivel()
            break
        }
        dia3: while (escolhaModo == 1) {
            dia++
            console.clear()
            statusJogador.aumentarTempo()
            console.log("================ \nPERDIDOS NA FLORESTA")
            console.log()
            if (personagem == 1) {
                if (statusJogador.grupo >= 1) {
                    prompt("Ap??s terem derrotado o Goblin, voc?? e Jhonny encontram-se passando pelo meio de uma floresta muito densa.[ENTER]")
                    if (kills == 0) {
                        console.log("\n'Voc?? ouviu o que o Goblin falou? temos que nos apressar se quisermos derrotar o inimigo.'")
                        prompt("Disse Jhonny. [ENTER]")
                    } else {
                        console.log("\n'Temos que nos apressar se quisermos chegar antes que Mordog se recupere da ??ltima batalha.'")
                        prompt("Disse Jhonny. [ENTER]")
                    }
                } else {
                    prompt("Ap??s ter derrotado o Goblin, voc?? encontra-se passando pelo meio de uma floresta muito densa.[ENTER]")
                    if (kills == 0) {
                        console.log("\nVoc?? lembra do que o Goblin falou e caminha mais r??pido para chegar ao destino o quanto antes.")
                        prompt("[ENTER]")
                    } else {
                        console.log("\nVoc?? caminha mais r??pido para chegar ao destino antes que Mordog se recupere da ??ltima batalha.")
                        prompt("[ENTER]")
                    }
                }
            } else if (personagem == 2) {
                if (statusJogador.grupo >= 1) {
                    prompt("Ap??s terem derrotado o Goblin, voc?? e Amanda encontram-se passando pelo meio de uma floresta muito densa.[ENTER]")
                    if (kills == 0) {
                        console.log("\n'Voc?? ouviu o que o Goblin falou? temos que nos apressar se quisermos derrotar o inimigo.'")
                        prompt("Disse Amanda. [ENTER]")
                    } else {
                        console.log("\n'Temos que nos apressar se quisermos chegar antes que Mordog se recupere da ??ltima batalha.'")
                        prompt("Disse Amanda. [ENTER]")
                    }
                } else {
                    prompt("Ap??s ter derrotado o Goblin, voc?? encontra-se passando pelo meio de uma floresta muito densa.[ENTER]")
                    if (kills == 0) {
                        console.log("\nVoc?? lembra do que o Goblin falou e caminha mais r??pido para chegar ao destino o quanto antes.")
                        prompt("[ENTER]")
                    } else {
                        console.log("\nVoc?? caminha mais r??pido para chegar ao destino antes que Mordog se recupere da ??ltima batalha.")
                        prompt("[ENTER]")
                    }
                }
            }
            console.clear()
            if (personagem == 1) {
                if (statusJogador.grupo >= 1) {
                    prompt("Ao longe voc??s avistam um elfo em cima de uma ??rvore. Ele ?? magro e est?? com uma linda roupa feita de folhas e cordas biodegrad??veis. [ENTER]")
                    console.log("\n'Que interessante, voc??s conseguiram passar pelo meu amigo.'")
                    console.log("'Infelizmente voc??s n??o ter??o tanta sorte contra mim.'")
                    prompt("Disse o Elfo saltando da ??rvore. [ENTER]")
                } else {
                    prompt("Ao longe voc?? avista um elfo em cima de uma ??rvore. Ele ?? magro e est?? com uma linda roupa feita de folhas e cordas biodegrad??veis. [ENTER]")
                    console.log("\n'Que interessante, voc?? conseguiu passar pelo meu amigo.'")
                    console.log("'Infelizmente n??o ter?? tanta sorte contra mim.'")
                    prompt("Disse o Elfo saltando da ??rvore. [ENTER]")
                }
            } else if (personagem == 2) {
                if (statusJogador.grupo >= 1) {
                    prompt("Ao longe voc??s avistam um elfo em cima de uma ??rvore. Ele ?? magro e est?? com uma linda roupa feita de folhas e cordas biodegrad??veis. [ENTER]")
                    console.log("\n'Que interessante, voc??s conseguiram passar pelo meu amigo.'")
                    console.log("'Infelizmente voc??s n??o ter??o tanta sorte contra mim.'")
                    prompt("Disse o Elfo saltando da ??rvore. [ENTER]")
                } else {
                    prompt("Ao longe voc?? avista um elfo em cima de uma ??rvore. Ele ?? magro e est?? com uma linda roupa feita de folhas e cordas biodegrad??veis. [ENTER]")
                    console.log("\n'Que interessante, voc?? conseguiu passar pelo meu amigo.'")
                    console.log("'Infelizmente n??o ter?? tanta sorte contra mim.'")
                    prompt("Disse o Elfo saltando da ??rvore. [ENTER]")
                }
            }
            backup(1,statusJogador)
            elfoDaFloresta.alterarAtributos()
            rodada = 0
            while(true){
                rodada++
                console.clear()
                console.log(`RODADA ${rodada}:`)
                console.log("===========")
                console.log()
                console.log("Elfo da Floresta ataca.")
                elfoDaFloresta.jogada()
                console.log(`\nVida ${statusJogador.nome}: ${statusJogador.vida}`)
                console.log(`Vida ${elfoDaFloresta.nome}: ${elfoDaFloresta.vida}`)
                if (statusJogador.vida <= 0) {
                    console.log("\nVOC?? MORREU.")
                    backup(2,statusJogador)
                    let z = +prompt("Gostaria de jogar o cap??tulo novamente? [1]SIM [2]N??O: ")
                    while (z != 1 && z != 2) {
                        console.log("\nN??MERO INV??LIDO!")
                        z = +prompt("Gostaria de jogar o cap??tulo novamente? [1]SIM [2]N??O: ")
                    }
                    if (z == 1){
                        continue dia3
                    } else {
                    break jogo
                    }
                }
                statusJogador.opcoesDeJogada('elfoDaFloresta')
                if (elfoDaFloresta.vida <= 0) {
                    break
                }
            }
            backup(2,statusJogador)
            console.clear()
            console.log("'Voc?? ?? mais forte do que eu pensava. Mereceu a vit??ria!'\n")
            let escolha2 = +prompt("O que voc?? faz? [1]MATAR [2]POUPAR: ")
            while(escolha2 != 1 && escolha2 != 2) {
                console.log("\nN??MERO INV??LIDO!")
                escolha2 = +prompt("O que voc?? faz? [1]MATAR [2]POUPAR: ")
            }
            if (personagem == 1) {
                if (statusJogador.grupo >= 1) {
                    if (escolha2 == 1){
                        console.log("\nVoc?? tira a vida do elfo e continua sua jornada.")
                        kills++
                    } else if (escolha2 == 2 && kills == 0) {
                        console.log("\n'Voc??s s??o mesmo guerreiros de cora????o puro.'")
                        prompt("[ENTER]")
                        console.clear()
                        console.log("'Sabe, a v??rias gera????es atr??s Mordog j?? foi diferente. Ele foi um rei bruxo que usava seus poderes para praticar o bem.'")
                        prompt("'Poucos sabem o que o fez mudar.'[ENTER]")
                        console.log()
                        console.log("O Elfo da Floresta faz uma rever??ncia e vai embora.")
                    } else if (escolha2 == 2) {
                        console.log("\n'Agrade??o por pouparem minha vida, esperava que meu amigo tivesse tido essa mesma sorte.'")
                        prompt("[ENTER]")
                        console.clear()
                        console.log("'Sabe, a v??rias gera????es atr??s Mordog j?? foi diferente. Ele foi um rei bruxo que usava seus poderes para praticar o bem.'")
                        prompt("'Poucos sabem o que o fez mudar.'[ENTER]")
                        console.log()
                        console.log("O Elfo da Floresta faz uma rever??ncia e vai embora.")
                    }
                } else {
                    if (escolha2 == 1){
                        console.log("\nVoc?? tira a vida do elfo e continua sua jornada.")
                        kills++
                    } else if (escolha2 == 2 && kills == 0) {
                        console.log("\n'Voc?? ?? mesmo um guerreiro de cora????o puro.'")
                        prompt("[ENTER]")
                        console.clear()
                        console.log("'Sabe, a v??rias gera????es atr??s Mordog j?? foi diferente. Ele foi um rei bruxo que usava seus poderes para praticar o bem.'")
                        prompt("'Poucos sabem o que o fez mudar.'[ENTER]")
                        console.log()
                        console.log("O Elfo da Floresta faz uma rever??ncia e vai embora.")
                    } else if (escolha2 == 2) {
                        console.log("\n'Agrade??o por poupar minha vida, esperava que meu amigo tivesse tido essa mesma sorte.'")
                        prompt("[ENTER]")
                        console.clear()
                        console.log("'Sabe, a v??rias gera????es atr??s Mordog j?? foi diferente. Ele foi um rei bruxo que usava seus poderes para praticar o bem.'")
                        prompt("'Poucos sabem o que o fez mudar.'[ENTER]")
                        console.log()
                        console.log("O Elfo da Floresta faz uma rever??ncia e vai embora.")
                    }
                }
            } else if (personagem == 2) {
                if (statusJogador.grupo >= 1) {
                    if (escolha2 == 1){
                        console.log("\nVoc?? tira a vida do elfo e continua sua jornada.")
                        kills++
                    } else if (escolha2 == 2 && kills == 0) {
                        console.log("\n'Voc??s s??o mesmo guerreiras de cora????o puro.'")
                        prompt("[ENTER]")
                        console.clear()
                        console.log("'Sabe, a v??rias gera????es atr??s Mordog j?? foi diferente. Ele foi um rei bruxo que usava seus poderes para praticar o bem.'")
                        prompt("'Poucos sabem o que o fez mudar.'[ENTER]")
                        console.log()
                        console.log("O Elfo da Floresta faz uma rever??ncia e vai embora.")
                    } else if (escolha2 == 2) {
                        console.log("\n'Agrade??o por pouparem minha vida, esperava que meu amigo tivesse tido essa mesma sorte.'")
                        prompt("[ENTER]")
                        console.clear()
                        console.log("'Sabe, a v??rias gera????es atr??s Mordog j?? foi diferente. Ele foi um rei bruxo que usava seus poderes para praticar o bem.'")
                        prompt("'Poucos sabem o que o fez mudar.'[ENTER]")
                        console.log()
                        console.log("O Elfo da Floresta faz uma rever??ncia e vai embora.")
                    }
                } else {
                    if (escolha2 == 1){
                        console.log("\nVoc?? tira a vida do elfo e continua sua jornada.")
                        kills++
                    } else if (escolha2 == 2 && kills == 0) {
                        console.log("\n'Voc?? ?? mesmo uma guerreira de cora????o puro.'")
                        prompt("[ENTER]")
                        console.clear()
                        console.log("'Sabe, a v??rias gera????es atr??s Mordog j?? foi diferente. Ele foi um rei bruxo que usava seus poderes para praticar o bem.'")
                        prompt("'Poucos sabem o que o fez mudar.'[ENTER]")
                        console.log()
                        console.log("O Elfo da Floresta faz uma rever??ncia e vai embora.")
                    } else if (escolha2 == 2) {
                        console.log("\n'Agrade??o por poupar minha vida, esperava que meu amigo tivesse tido essa mesma sorte.'")
                        prompt("[ENTER]")
                        console.clear()
                        console.log("'Sabe, a v??rias gera????es atr??s Mordog j?? foi diferente. Ele foi um rei bruxo que usava seus poderes para praticar o bem.'")
                        prompt("'Poucos sabem o que o fez mudar.'[ENTER]")
                        console.log()
                        console.log("O Elfo da Floresta faz uma rever??ncia e vai embora.")
                    }
                }
            }
            statusJogador.aumentarNivel()
            break
        }
        dia4: while (escolhaModo == 1) {
            dia++
            console.clear()
            statusJogador.aumentarTempo()
            console.log("================ \nATAQUE NOTURNO")
            console.log()
            if (personagem == 1) {
                if (statusJogador.grupo >= 1) {
                    console.log("Voc?? dormia. Jhonny estava de vigia do lado de fora da barraca.")
                    prompt("Foi ent??o quando um barulho de passos os assustou, passos que faziam tremer o ch??o abaixo de voc??s. [ENTER]")
                    console.log("\nO ser gigante lhes pergunta: ")
                    console.log("'Fiquei sabendo que dois humanos est??o passando aqui perto. Eu vim acabar com eles antes que cheguem no meu mestre.'")
                    console.log("'Voc??s viram eles?'\n")
                    console.log("O que voc?? responde? \n[1]SOMOS N??S \n[2]N??O VIMOS ELES")
                    let a = prompt("Resposta: ")
                    while (a != 1 && a != 2) {
                        console.log("\nN??MERO INV??LIDO!")
                        console.log("O que voc?? responde? \n[1]SOMOS N??S \n[2]N??O VIMOS ELES")
                        a = prompt("Resposta: ")
                    }
                    if (a == 2) {
                        console.log()
                        prompt("'Ah ok, descupem atrapalhar seu sono.' [ENTER]")
                        console.log("Um momento, voc??s est??o tentando me enganar?")
                        prompt("[ENTER]")
                    } else {
                        console.log("\n'Encontrei voc??s!'")
                        prompt("[ENTER]")
                    }
                } else {
                    prompt("Voc?? dormia. Foi ent??o quando um barulho de passos o acordou, passos que faziam tremer o ch??o abaixo de voc??. [ENTER]")
                    console.log("\nO ser gigante lhe pergunta: ")
                    console.log("'Fiquei sabendo que um humano est?? passando aqui perto. Eu vim acabar com ele antes que chegue no meu mestre.'")
                    console.log("'Voc?? viu ele?'\n")
                    console.log("O que voc?? responde? \n[1]SOU EU \n[2]N??O VI ELE")
                    let a = prompt("Resposta: ")
                    while (a != 1 && a != 2) {
                        console.log("\nN??MERO INV??LIDO!")
                        console.log("O que voc?? responde? \n[1]SOMOS N??S \n[2]N??O VIMOS ELES")
                        a = prompt("Resposta: ")
                    }
                    if (a == 2) {
                        console.log()
                        prompt("'Ah ok, descupe atrapalhar seu sono.' [ENTER]")
                        console.log("Um momento, voc?? est?? tentando me enganar?")
                        prompt("[ENTER]")
                    } else {
                        console.log("\n'Encontrei voc??!'")
                        prompt("[ENTER]")
                    }
                }
            } else if (personagem == 2) {
                if (statusJogador.grupo >= 1) {
                    console.log("Voc?? dormia. Amanda estava de vigia do lado de fora da barraca.")
                    prompt("Foi ent??o quando um barulho de passos as assustou, passos que faziam tremer o ch??o abaixo de voc??s. [ENTER]")
                    console.log("\nO ser gigante lhes pergunta: ")
                    console.log("'Fiquei sabendo que duas humanas est??o passando aqui perto. Eu vim acabar com elas antes que cheguem no meu mestre.'")
                    console.log("'Voc??s viram elas?'\n")
                    console.log("O que voc?? responde? \n[1]SOMOS N??S \n[2]N??O VIMOS ELAS")
                    let a = prompt("Resposta: ")
                    while (a != 1 && a != 2) {
                        console.log("\nN??MERO INV??LIDO!")
                        console.log("O que voc?? responde? \n[1]SOMOS N??S \n[2]N??O VIMOS ELES")
                        a = prompt("Resposta: ")
                    }
                    if (a == 2) {
                        console.log()
                        prompt("'Ah ok, descupem atrapalhar seu sono.' [ENTER]")
                        console.log("Um momento, voc??s est??o tentando me enganar?")
                        prompt("[ENTER]")
                    } else {
                        console.log("\n'Encontrei voc??s!'")
                        prompt("[ENTER]")
                    }
                } else {
                    prompt("Voc?? dormia. Foi ent??o quando um barulho de passos a acordou, passos que faziam tremer o ch??o abaixo de voc??. [ENTER]")
                    console.log("\nO ser gigante lhe pergunta: ")
                    console.log("'Fiquei sabendo que uma humana est?? passando aqui perto. Eu vim acabar com ela antes que chegue no meu mestre.'")
                    console.log("'Voc?? viu ela?'\n")
                    console.log("O que voc?? responde? \n[1]SOU EU \n[2]N??O VI ELA")
                    let a = prompt("Resposta: ")
                    while (a != 1 && a != 2) {
                        console.log("\nN??MERO INV??LIDO!")
                        console.log("O que voc?? responde? \n[1]SOMOS N??S \n[2]N??O VIMOS ELES")
                        a = prompt("Resposta: ")
                    }
                    if (a == 2) {
                        console.log()
                        prompt("'Ah ok, descupe atrapalhar seu sono.' [ENTER]")
                        console.log("Um momento, voc?? est?? tentando me enganar?")
                        prompt("[ENTER]")
                    } else {
                        console.log("\n'Encontrei voc??!'")
                        prompt("[ENTER]")
                    }
                }
            }
            backup(1,statusJogador)
            troll.alterarAtributos()
            rodada = 0
            while(true){
                rodada++
                console.clear()
                console.log(`RODADA ${rodada}:`)
                console.log("===========")
                console.log()
                console.log("Troll ataca.")
                troll.jogada()
                console.log(`\nVida ${statusJogador.nome}: ${statusJogador.vida}`)
                console.log(`Vida ${troll.nome}: ${troll.vida}`)
                if (statusJogador.vida <= 0) {
                    console.log("\nVOC?? MORREU.")
                    backup(2,statusJogador)
                    let z = +prompt("Gostaria de jogar o cap??tulo novamente? [1]SIM [2]N??O: ")
                    while (z != 1 && z != 2) {
                        console.log("\nN??MERO INV??LIDO!")
                        z = +prompt("Gostaria de jogar o cap??tulo novamente? [1]SIM [2]N??O: ")
                    }
                    if (z == 1){
                        continue dia4
                    } else {
                    break jogo
                    }
                }
                statusJogador.opcoesDeJogada('troll')
                if (troll.vida <= 0) {
                    break
                }
            }
            backup(2,statusJogador)
            console.clear()
            if (personagem == 1) {
                if (statusJogador.grupo >= 1) {
                    console.log("'Como humanos t??o pequeninos conseguem me derrotar?'")
                    console.log("'Talvez eu esteja ficando velho para essas batalhas.'") 
                    prompt("Disse o Troll chateado. [ENTER]")
                } else {
                    console.log("'Como um humano t??o pequenino consegue me derrotar?'")
                    console.log("'Talvez eu esteja ficando velho para essas batalhas.'") 
                    prompt("Disse o Troll chateado. [ENTER]")
                }
            } else if (personagem == 2) {
                if (statusJogador.grupo >= 1) {
                    console.log("'Como humanas t??o pequeninas conseguem me derrotar?'")
                    console.log("'Talvez eu esteja ficando velho para essas batalhas.'") 
                    prompt("Disse o Troll chateado. [ENTER]")
                } else {
                    console.log("'Como uma humana t??o pequenina consegue me derrotar?'")
                    console.log("'Talvez eu esteja ficando velho para essas batalhas.'") 
                    prompt("Disse o Troll chateado. [ENTER]")
                }
            }
            console.log()
            let escolha3 = +prompt("O que voc?? faz? [1]MATAR [2]POUPAR: ")
            while(escolha3 != 1 && escolha3 != 2) {
                console.log("\nN??MERO INV??LIDO!")
                escolha3 = +prompt("O que voc?? faz? [1]MATAR [2]POUPAR: ")
            }
            if (escolha3 == 1){
                console.log("\nVoc?? acaba com o Troll e vai preparar o caf?? da manh??.")
                kills++
            } else if (escolha3 == 2){
                console.clear()
                console.log("O Troll fica perplexo e diz:")
                prompt("'Nunca havia visto tamanha compaix??o vinda da ra??a humana. Obrigado!' [ENTER]")
                console.log("\n'Sei o objetivo de sua miss??o. Mas saiba que Mordog sempre foi uma pessoa boa, e seu objetivo sempre foi nobre.'")
                prompt("'Por isso eu e os outros 5 guerreiros o seguimos.' [ENTER]")
                console.log("\nO Troll retorna para sua caverna antes que o sol apare??a e o transforme em pedra.")
                prompt("[ENTER]")
            }
            statusJogador.aumentarNivel()
            break
        }
        dia5: while (escolhaModo == 1) {
            dia++
            console.clear()
            statusJogador.aumentarTempo()
            console.log("================ \nCHAMAS DA DESTRUI????O")
            console.log()
            if (personagem == 1) {
                if (statusJogador.grupo >= 1) {
                    console.log("Ap??s serem surpreendidos pelo Troll ontem de madrugada, voc??s agora ficam mais atentos.\n")
                    console.log("'Se aquele Troll n??o fosse t??o pesado, talvez n??s nem ter??amos visto sua chegada.'")
                    prompt("Disse Jhonny. [ENTER]")
                    console.log("\nVoc??s se alegram por estarem na metade do caminho. A jornada est?? mesmo longa.")
                    prompt("[ENTER]")
                    console.clear()
                    prompt("De repente voc??s avistam uma sombra no horizonte voando em sua dire????o. [ENTER]")
                    console.log("Um Grande Drag??o aparece e enche o c??u sob voc??s de chamas.")
                    prompt("[ENTER]")
                    if (statusJogador.capa == 1) {
                        console.log()
                        prompt("Ainda bem que voc?? trouxe sua capa contra fogo... [ENTER]")
                    }
                } else {
                    console.log("Ap??s ser surpreendido pelo Troll ontem de madrugada, voc?? agora fica mais atento.\n")
                    console.log("'Se aquele Troll n??o fosse t??o pesado, talvez eu nem teria visto sua chegada.'")
                    prompt("Voc?? pensa. [ENTER]")
                    console.log("\nVoc?? se alegra por estar na metade do caminho. A jornada est?? mesmo longa.")
                    prompt("[ENTER]")
                    console.clear()
                    prompt("De repente voc?? avista uma sombra no horizonte voando em sua dire????o. [ENTER]")
                    console.log("Um Grande Drag??o aparece e enche o c??u sob voc?? de chamas.")
                    prompt("[ENTER]")
                    if (statusJogador.capa == 1) {
                        console.log()
                        prompt("Ainda bem que voc?? trouxe sua capa contra fogo... [ENTER]")
                    }
                }
            } else if (personagem == 2) {
                if (statusJogador.grupo >= 1) {
                    console.log("Ap??s serem surpreendidas pelo Troll ontem de madrugada, voc??s agora ficam mais atentas.\n")
                    console.log("'Se aquele Troll n??o fosse t??o pesado, talvez n??s nem ter??amos visto sua chegada.'")
                    prompt("Disse Amanda. [ENTER]")
                    console.log("\nVoc??s se alegram por estarem na metade do caminho. A jornada est?? mesmo longa.")
                    prompt("[ENTER]")
                    console.clear()
                    prompt("De repente voc??s avistam uma sombra no horizonte voando em sua dire????o. [ENTER]")
                    console.log("Um Grande Drag??o aparece e enche o c??u sob voc??s de chamas.")
                    prompt("[ENTER]")
                    if (statusJogador.capa == 1) {
                        console.log()
                        prompt("Ainda bem que voc?? trouxe sua capa contra fogo... [ENTER]")
                    }
                } else {
                    console.log("Ap??s ser surpreendida pelo Troll ontem de madrugada, voc?? agora fica mais atenta.\n")
                    console.log("'Se aquele Troll n??o fosse t??o pesado, talvez eu nem teria visto sua chegada.'")
                    prompt("Voc?? pensa. [ENTER]")
                    console.log("\nVoc?? se alegra por estar na metade do caminho. A jornada est?? mesmo longa.")
                    prompt("[ENTER]")
                    console.clear()
                    prompt("De repente voc?? avista uma sombra no horizonte voando em sua dire????o. [ENTER]")
                    console.log("Um Grande Drag??o aparece e enche o c??u sob voc?? de chamas.")
                    prompt("[ENTER]")
                    if (statusJogador.capa == 1) {
                        console.log()
                        prompt("Ainda bem que voc?? trouxe sua capa contra fogo... [ENTER]")
                    }
                }
            }
            backup(1,statusJogador)
            dragao.alterarAtributos()
            rodada = 0
            while(true){
                rodada++
                console.clear()
                console.log(`RODADA ${rodada}:`)
                console.log("===========")
                console.log()
                console.log("Drag??o ataca.")
                dragao.jogada()
                console.log(`\nVida ${statusJogador.nome}: ${statusJogador.vida}`)
                console.log(`Vida ${dragao.nome}: ${dragao.vida}`)
                if (statusJogador.vida <= 0) {
                    console.log("\nVOC?? MORREU.")
                    backup(2,statusJogador)
                    let z = +prompt("Gostaria de jogar o cap??tulo novamente? [1]SIM [2]N??O: ")
                    while (z != 1 && z != 2) {
                        console.log("\nN??MERO INV??LIDO!")
                        z = +prompt("Gostaria de jogar o cap??tulo novamente? [1]SIM [2]N??O: ")
                    }
                    if (z == 1){
                        continue dia5
                    } else {
                    break jogo
                    }
                }
                statusJogador.opcoesDeJogada('dragao')
                if (dragao.vida <= 0) {
                    break
                }
            }
            backup(2,statusJogador)
            console.clear()
            if (statusJogador.capa == 0) {
                prompt("\nVoc?? acabou sofrendo queimaduras pelo fogo do drag??o. [ENTER]")
            }
            console.log("\nCa??do no ch??o, o Drag??o disse:")
            console.log("'Estou mesmo impressionado com sua for??a a habilidade para desviar de meus ataques.'")
            console.log("'Mas n??o pense que vai ser o bastante contra o que existe ?? frente.'")
            prompt("[ENTER]")
            console.log()
            let escolha4 = +prompt("O que voc?? faz? [1]MATAR [2]POUPAR: ")
            while(escolha4 != 1 && escolha4 != 2) {
                console.log("\nN??MERO INV??LIDO!")
                escolha4 = +prompt("O que voc?? faz? [1]MATAR [2]POUPAR: ")
                console.log()
            }
            if (escolha4 == 1){
                prompt("Voc?? d?? o golpe final no inimigo.")
                kills++
            } else if (escolha4 == 2) {
                console.log("'Esse foi mesmo um lindo gesto.'")
                if(kills >= 2) {
                    console.log("'Gostaria que meus amigos tamb??m tivessem sobrevivido.")
                    prompt("[ENTER]")
                }
                console.clear()
                prompt("'Permita que eu conte um segredo antes de minha retirada humilhante...' [ENTER]")
                console.log("\n'H?? muito tempo atr??s, Mordog era bondoso e feliz.'")
                prompt("'Ele tinha um reino, uma esposa, um filho, e gostava de ajudar a todos.'[ENTER]")
                console.log("\n'Mas certo dia seu reino foi atacado por bandidos saqueadores.'")
                prompt("'Eles colocaram fogo em seu castelo, apenas Mordog sobreviveu.' [ENTER]")
                console.log()
                console.log("O Drag??o se levanta e sai voando.")
                prompt("[ENTER]")
                console.clear()
            }
            statusJogador.aumentarNivel()
            break
        }
        dia6: while (escolhaModo == 1) {
            dia++
            console.clear()
            statusJogador.aumentarTempo()
            console.log("================ \nUM CAMINHO SEM VOLTA")
            console.log()
            if (personagem == 1) {
                if (statusJogador.grupo >= 1) {
                    console.log("Mais um dia de caminhada, dessa vez voc??s est??o cada vez mais pr??ximos do destino.")
                    console.log()
                    console.log("'O Drag??o que enfrentamos ontem era muito poderoso, e ele ainda avisou que ser?? mais dif??cil ?? frente.'")
                    prompt("Disse Jhonny. [ENTER]")
                    console.log()
                    let resposta1 = +prompt("'Voc?? acha que vamos conseguir?' [1]SIM [2]N??O: ")
                    while (resposta1 != 1 && resposta1 != 2){
                        console.log("\nN??MERO INV??LIDO!")
                        resposta1 = +prompt("'Voc?? acha que vamos conseguir?' [1]SIM [2]N??O: ")
                    }
                    console.log()
                    if (resposta1 == 1) {
                        prompt("'Acredito que sim, estamos t??o perto de conseguirmos.' [ENTER]")
                    } else {
                        prompt("'Mais dificuldades vir??o, de qualquer modo agora estamos perto de mais para desistirmos.' [ENTER]")
                    }
                    console.clear()
                    prompt("Eis que ent??o voc??s se deparam com uma mulher de chap??u pontudo em seu caminho. [ENTER]")
                    console.log("\n'Sou a Bruxa Guerreira de Mordog, preparem-se para enfrentar meu ex??rcito!'")
                    console.log("\nDe repente centenas de esqueletos saem de baixo da terra e partem para o ataque.")
                } else {
                    console.log("Mais um dia de caminhada, dessa vez voc?? est?? cada vez mais pr??ximo do destino.")
                    console.log()
                    console.log("'O Drag??o que enfrentamei ontem era muito poderoso, e ele ainda avisou que ser?? mais dif??cil ?? frente.'")
                    prompt("Voc?? pensa. [ENTER]")
                    console.log()
                    prompt("'Mais dificuldades vir??o, de qualquer modo agora estou perto de mais para desistir.' [ENTER]")
                    console.clear()
                    prompt("Eis que ent??o voc?? se depara com uma mulher de chap??u pontudo em seu caminho. [ENTER]")
                    console.log("\n'Sou a Bruxa Guerreira de Mordog, prepare-se para enfrentar meu ex??rcito!'")
                    console.log("\nDe repente centenas de esqueletos saem de baixo da terra e partem para o ataque.")
                }
            } else if (personagem == 2) {
                if (statusJogador.grupo >= 1) {
                    console.log("Mais um dia de caminhada, dessa vez voc??s est??o cada vez mais pr??ximas do destino.")
                    console.log()
                    console.log("'O Drag??o que enfrentamos ontem era muito poderoso, e ele ainda avisou que ser?? mais dif??cil ?? frente.'")
                    prompt("Disse Amanda. [ENTER]")
                    console.log()
                    let resposta1 = +prompt("'Voc?? acha que vamos conseguir?' [1]SIM [2]N??O: ")
                    while (resposta1 != 1 && resposta1 != 2){
                        console.log("\nN??MERO INV??LIDO!")
                        resposta1 = +prompt("'Voc?? acha que vamos conseguir?' [1]SIM [2]N??O: ")
                    }
                    console.log()
                    if (resposta1 == 1) {
                        prompt("'Acredito que sim, estamos t??o perto de conseguirmos.' [ENTER]")
                    } else {
                        prompt("'Mais dificuldades vir??o, de qualquer modo agora estamos perto de mais para desistirmos.' [ENTER]")
                    }
                    console.clear()
                    prompt("Eis que ent??o voc??s se deparam com uma mulher de chap??u pontudo em seu caminho. [ENTER]")
                    console.log("\n'Sou a Bruxa Guerreira de Mordog, preparem-se para enfrentar meu ex??rcito!'")
                    console.log("\nDe repente centenas de esqueletos saem de baixo da terra e partem para o ataque.")
                } else {
                    console.log("Mais um dia de caminhada, dessa vez voc?? est?? cada vez mais pr??xima do destino.")
                    console.log()
                    console.log("'O Drag??o que enfrentamei ontem era muito poderoso, e ele ainda avisou que ser?? mais dif??cil ?? frente.'")
                    prompt("Voc?? pensa. [ENTER]")
                    console.log()
                    prompt("'Mais dificuldades vir??o, de qualquer modo agora estou perto de mais para desistir.' [ENTER]")
                    console.clear()
                    prompt("Eis que ent??o voc?? se depara com uma mulher de chap??u pontudo em seu caminho. [ENTER]")
                    console.log("\n'Sou a Bruxa Guerreira de Mordog, prepare-se para enfrentar meu ex??rcito!'")
                    console.log("\nDe repente centenas de esqueletos saem de baixo da terra e partem para o ataque.")
                }
            }
            prompt("[ENTER]")
            backup(1,statusJogador)
            bruxa.alterarAtributos()
            rodada = 0
            while(true){
                rodada++
                console.clear()
                console.log(`RODADA ${rodada}:`)
                console.log("===========")
                console.log()
                console.log("Bruxa ataca.")
                bruxa.jogada()
                console.log(`\nVida ${statusJogador.nome}: ${statusJogador.vida}`)
                console.log(`Vida ${bruxa.nome}: ${bruxa.vida}`)
                if (statusJogador.vida <= 0) {
                    console.log("\nVOC?? MORREU.")
                    backup(2,statusJogador)
                    let z = +prompt("Gostaria de jogar o cap??tulo novamente? [1]SIM [2]N??O: ")
                    while (z != 1 && z != 2) {
                        console.log("\nN??MERO INV??LIDO!")
                        z = +prompt("Gostaria de jogar o cap??tulo novamente? [1]SIM [2]N??O: ")
                    }
                    if (z == 1){
                        continue dia6
                    } else {
                    break jogo
                    }
                }
                statusJogador.opcoesDeJogada('bruxa')
                if (bruxa.vida <= 0) {
                    break
                }
            }
            backup(2,statusJogador)
            console.clear()
            if (personagem == 1) {
                if (statusJogador.grupo >= 1) {
                    console.log("A Bruxa fala:")
                    console.log("'Voc?? conseguiu derrotar at?? meu ex??rcio.'")
                    console.log("'??s mesmo muito habilidoso em combate, mesmo que seu parceiro n??o ajude em nada.'")
                    prompt("[ENTER]")
                } else {
                    console.log("A Bruxa fala:")
                    console.log("'Voc?? conseguiu derrotar at?? meu ex??rcio.'")
                    console.log("'??s mesmo muito habilidoso em combate!'")
                    prompt("[ENTER]")
                }
            } else if (personagem == 2) {
                if (statusJogador.grupo >= 1) {
                    console.log("A Bruxa fala:")
                    console.log("'Voc?? conseguiu derrotar at?? meu ex??rcio.'")
                    console.log("'??s mesmo muito habilidosa em combate, mesmo que sua parceira n??o ajude em nada.'")
                    prompt("[ENTER]")
                } else {
                    console.log("A Bruxa fala:")
                    console.log("'Voc?? conseguiu derrotar at?? meu ex??rcio.'")
                    console.log("'??s mesmo muito habilidosa em combate!'")
                    prompt("[ENTER]")
                }
            }
            if (kills >= 3) {
                console.log("'Vai fazer comigo o mesmo que com meus companheiros?'")
            }
            console.log()
            let escolha5 = +prompt("O que voc?? faz? [1]MATAR [2]POUPAR: ")
            while(escolha5 != 1 && escolha5 != 2) {
                console.log("\nN??MERO INV??LIDO!")
                escolha5 = +prompt("O que voc?? faz? [1]MATAR [2]POUPAR: ")
                console.log()
            }
            if (escolha5 == 1) {
                console.log("A Bruxa tenta lan??ar um ??ltimo feiti??o, mas n??o ?? r??pida o suficiente para parar o inevit??vel.")
                kills++
            } else if (escolha5 == 2) {
                console.clear()
                console.log("A Bruxa fala:")
                prompt("'Eu tenho uma bola de cristal, j?? sabia que ficaria viva, muahahaha!'")
                console.clear()
                prompt("'Depois que o reino de Mordog foi saqueado, ele ca??ou cada um dos criminosos e fez justi??a.' [ENTER]")
                console.log()
                prompt("'Desde ent??o ele busca cada vez mais poder para trazer de volta aqueles que ama.' [ENTER]")
                console.log("\n'Alguns de meus companheiros tamb??m perderam entes queridos naquele dia, Mordog ?? a nossa esperan??a.'")
                if(statusJogador.grupo >= 1) {
                    prompt("'Espero que entendam.' [ENTER]")
                } else {
                    prompt("'Espero que entenda.' [ENTER]")
                }
                console.log("\nA Bruxa monta em sua vassoura e sai voando.")
            }
            prompt(`[ENTER]`)
            statusJogador.aumentarNivel()
            break
        }
        dia7: while (escolhaModo == 1) {
            dia++
            console.clear()
            statusJogador.aumentarTempo()
            console.log("================ \nUMA REVELA????O INESPERADA")
            console.log()
            if (personagem == 1) {
                if (statusJogador.grupo >= 1) {
                    if (statusJogador.mapa >= 1) {
                        console.log("Ap??s desarmarem o acampamento e continuarem seguindo o mapa, voc??s avistam a montanha onde possivelmente est?? a caverna do bruxo.")
                        prompt("[ENTER]")
                    } else {
                        console.log("Ap??s desarmarem o acampamento e continuarem a jornada, voc??s avistam a montanha onde possivelmente est?? a caverna do bruxo.")
                        prompt("[ENTER]")
                    }
                    console.log("\nJhonny fala:")
                    prompt("'Estamos t??o perto do objetivo, mas derrotamos apenas 5 guerreiros, ainda falta 1...' [ENTER]")
                    console.log()
                    console.log("'Exatamente, ainda falta eu, o Cavaleiro Fantasma!'")
                    prompt("Disse um cavaleiro montado em seu cavalo que os observava de longe. [ENTER]")
                    console.clear()
                    console.log("'Vou contar algo que provavelmente voc??s dois n??o sabiam.'")
                    prompt("'Mordog n??o est?? roubando as almas, tudo voltar?? a ser o que era antes.' [ENTER]")
                    console.log("\n'Meu mestre j?? conseguiu todo o poder necess??rio para trazer todos os que amamos de volta.'")
                    console.log("'N??o posso deixar que voc??s o impe??am de fazer isso.'")
                    prompt("[ENTER]")
                    console.clear()
                    console.log("\n'Voc??s devem estar pensando o porqu?? de eu ser o Cavaleiro Fantasma e n??o parecer com um fantasma.'")
                    prompt("'Pois saibam que esse ?? um nome que escolhi para assustar meus inimigos.' [ENTER]")
                    console.log()
                    let resposta2 = +prompt("'Voc??s est??o se sentindo assustados?' [1]SIM [2]N??O: ")
                    while(resposta2 != 1 && resposta2 != 2) {
                        console.log("\nN??MERO INV??LIDO!")
                        resposta2 = +prompt("'Voc??s est??o se sentindo assustados?' [1]SIM [2]N??O: ")
                    }
                    if (resposta2 == 2) {
                        console.log("\n'Pois v??o se sentir assustados agora!'")
                        console.log("O cavaleiro pula de seu cavalo e saca sua linda espada cromada.")
                        prompt("[ENTER]")
                    } else if (resposta2 == 1) {
                        console.log("\n'Pois v??o se sentir mais ainda agora!'")
                        console.log("O cavaleiro pula de seu cavalo e saca sua linda espada cromada.")
                        prompt("[ENTER]")
                    }
                    if (kills >= 4) {
                        console.log()
                        prompt("?? melhor se prepararem seus assassinos desgra??ados! [ENTER]")
                    }
                } else {
                    if (statusJogador.mapa >= 1) {
                        console.log("Ap??s desarmar o acampamento e continuar seguindo o mapa, voc?? avista a montanha onde possivelmente est?? a caverna do bruxo.")
                        prompt("[ENTER]")
                    } else {
                        console.log("Ap??s desarmar o acampamento e continuar a jornada, voc?? avista a montanha onde possivelmente est?? a caverna do bruxo.")
                        prompt("[ENTER]")
                    }
                    console.log("\nVoc?? fala para si mesmo:")
                    prompt("'Estou t??o perto do objetivo, mas derrotei apenas 5 guerreiros, ainda falta 1...' [ENTER]")
                    console.log()
                    console.log("'Exatamente, ainda falta eu, o Cavaleiro Fantasma!'")
                    prompt("Disse um cavaleiro montado em seu cavalo que o observava de longe. [ENTER]")
                    console.clear()
                    console.log("'Vou contar algo que provavelmente voc?? n??o sabia.'")
                    prompt("'Mordog n??o est?? roubando as almas, tudo voltar?? a ser o que era antes.' [ENTER]")
                    console.log("\n'Meu mestre j?? conseguiu todo o poder necess??rio para trazer todos os que amamos de volta.'")
                    console.log("'N??o posso deixar que voc?? o impe??a de fazer isso.'")
                    prompt("[ENTER]")
                    console.clear()
                    console.log("\n'Voc?? deve estar pensando o porqu?? de eu ser o Cavaleiro Fantasma e n??o parecer com um fantasma.'")
                    prompt("'Pois saiba que esse ?? um nome que escolhi para assustar meus inimigos.' [ENTER]")
                    console.log()
                    let resposta2 = +prompt("'Voc?? est?? se sentindo assustado?' [1]SIM [2]N??O: ")
                    while(resposta2 != 1 && resposta2 != 2) {
                        console.log("\nN??MERO INV??LIDO!")
                        resposta2 = +prompt("'Voc?? est?? se sentindo assustado?' [1]SIM [2]N??O: ")
                    }
                    if (resposta2 == 2) {
                        console.log("\n'Pois vai se sentir assustado agora!'")
                        console.log("O cavaleiro pula de seu cavalo e saca sua linda espada cromada.")
                        prompt("[ENTER]")
                    } else if (resposta2 == 1) {
                        console.log("\n'Poi vai se sentir mais ainda agora!'")
                        console.log("O cavaleiro pula de seu cavalo e saca sua linda espada cromada.")
                        prompt("[ENTER]")
                    }
                    if (kills >= 4) {
                        console.log()
                        prompt("?? melhor se preparar seu assassino desgra??ado! [ENTER]")
                    }
                }
            } else if (personagem == 2) {
                if (statusJogador.grupo >= 1) {
                    if (statusJogador.mapa >= 1) {
                        console.log("Ap??s desarmarem o acampamento e continuarem seguindo o mapa, voc??s avistam a montanha onde possivelmente est?? a caverna do bruxo.")
                        prompt("[ENTER]")
                    } else {
                        console.log("Ap??s desarmarem o acampamento e continuarem a jornada, voc??s avistam a montanha onde possivelmente est?? a caverna do bruxo.")
                        prompt("[ENTER]")
                    }
                    console.log("\nAmanda fala:")
                    prompt("'Estamos t??o perto do objetivo, mas derrotamos apenas 5 guerreiros, 'ainda falta 1...' [ENTER]")
                    console.log()
                    console.log("'Exatamente, ainda falta eu, o Cavaleiro Fantasma!'")
                    prompt("Disse um cavaleiro montado em seu cavalo que as observava de longe. [ENTER]")
                    console.clear()
                    console.log("'Vou contar algo que provavelmente voc??s duas n??o sabiam.'")
                    prompt("'Mordog n??o est?? roubando as almas, tudo voltar?? a ser o que era antes.' [ENTER]")
                    console.log("\n'Meu mestre j?? conseguiu todo o poder necess??rio para trazer todos os que amamos de volta.'")
                    console.log("'N??o posso deixar que voc??s o impe??am de fazer isso.'")
                    prompt("[ENTER]")
                    console.clear()
                    console.log("\n'Voc??s devem estar pensando o porqu?? de eu ser o Cavaleiro Fantasma e n??o parecer com um fantasma.'")
                    prompt("'Pois saibam que esse ?? um nome que escolhi para assustar meus inimigos.' [ENTER]")
                    console.log()
                    let resposta2 = +prompt("'Voc??s est??o se sentindo assustadas?' [1]SIM [2]N??O: ")
                    while(resposta2 != 1 && resposta2 != 2) {
                        console.log("\nN??MERO INV??LIDO!")
                        resposta2 = +prompt("'Voc??s est??o se sentindo assustadas?' [1]SIM [2]N??O: ")
                    }
                    if (resposta2 == 2) {
                        console.log("\n'Pois v??o se sentir assustadas agora!'")
                        console.log("O cavaleiro pula de seu cavalo e saca sua linda espada cromada.")
                        prompt("[ENTER]")
                    } else if (resposta2 == 1) {
                        console.log("\n'Pois v??o se sentir mais ainda agora!'")
                        console.log("O cavaleiro pula de seu cavalo e saca sua linda espada cromada.")
                        prompt("[ENTER]")
                    }
                    if (kills >= 4) {
                        console.log()
                        prompt("?? melhor se prepararem suas assassinas desgra??adas! [ENTER]")
                    }
                } else {
                    if (statusJogador.mapa >= 1) {
                        console.log("Ap??s desarmar o acampamento e continuarem seguindo o mapa, voc?? avista a montanha onde possivelmente est?? a caverna do bruxo.")
                        prompt("[ENTER]")
                    } else {
                        console.log("Ap??s desarmar o acampamento e continuar a jornada, voc?? avista a montanha onde possivelmente est?? a caverna do bruxo.")
                        prompt("[ENTER]")
                    }
                    console.log("\nVoc?? fala para si mesma:")
                    prompt("'Estou t??o perto do objetivo, mas derrotei apenas 5 guerreiros, ainda falta 1...' [ENTER]")
                    console.log()
                    console.log("'Exatamente, ainda falta eu, o Cavaleiro Fantasma!'")
                    prompt("Disse um cavaleiro montado em seu cavalo que a observava de longe. [ENTER]")
                    console.clear()
                    console.log("'Vou contar algo que provavelmente voc?? n??o sabia.'")
                    prompt("'Mordog n??o est?? roubando as almas, tudo voltar?? a ser o que era antes.' [ENTER]")
                    console.log("\n'Meu mestre j?? conseguiu todo o poder necess??rio para trazer todos os que amamos de volta.'")
                    console.log("'N??o posso deixar que voc?? o impe??a de fazer isso.'")
                    prompt("[ENTER]")
                    console.clear()
                    console.log("\n'Voc?? deve estar pensando o porqu?? de eu ser o Cavaleiro Fantasma e n??o parecer com um fantasma.'")
                    prompt("'Pois saiba que esse ?? um nome que escolhi para assustar meus inimigos.' [ENTER]")
                    console.log()
                    let resposta2 = +prompt("'Voc?? est?? se sentindo assustada?' [1]SIM [2]N??O: ")
                    while(resposta2 != 1 && resposta2 != 2) {
                        console.log("\nN??MERO INV??LIDO!")
                        resposta2 = +prompt("'Voc?? est?? se sentindo assustada?' [1]SIM [2]N??O: ")
                    }
                    if (resposta2 == 2) {
                        console.log("\n'Pois vai se sentir assustada agora!'")
                        console.log("O cavaleiro pula de seu cavalo e saca sua linda espada cromada.")
                        prompt("[ENTER]")
                    } else if (resposta2 == 1) {
                        console.log("\n'Poi vai se sentir mais ainda agora!'")
                        console.log("O cavaleiro pula de seu cavalo e saca sua linda espada cromada.")
                        prompt("[ENTER]")
                    }
                    if (kills >= 4) {
                        console.log()
                        prompt("?? melhor se preparar sua assassina desgra??ada! [ENTER]")
                    }
                }
            }
            backup(1,statusJogador)
            cavaleiroFantasma.alterarAtributos()
            rodada = 0
            while(true){
                rodada++
                console.clear()
                console.log(`RODADA ${rodada}:`)
                console.log("===========")
                console.log()
                console.log("Cavaleiro Fantasma ataca.")
                cavaleiroFantasma.jogada()
                console.log(`\nVida ${statusJogador.nome}: ${statusJogador.vida}`)
                console.log(`Vida ${cavaleiroFantasma.nome}: ${cavaleiroFantasma.vida}`)
                if (statusJogador.vida <= 0) {
                    console.log("\nVOC?? MORREU.")
                    backup(2,statusJogador)
                    let z = +prompt("Gostaria de jogar o cap??tulo novamente? [1]SIM [2]N??O: ")
                    while (z != 1 && z != 2) {
                        console.log("\nN??MERO INV??LIDO!")
                        z = +prompt("Gostaria de jogar o cap??tulo novamente? [1]SIM [2]N??O: ")
                    }
                    if (z == 1){
                        continue dia7
                    } else {
                    break jogo
                    }
                }
                statusJogador.opcoesDeJogada('cavaleiroFantasma')
                if (cavaleiroFantasma.vida <= 0) {
                    break
                }
            }
            backup(2,statusJogador)
            console.clear()
            console.log("'Me perdoe mestre, eu falhei em proteg??-lo.'")
            prompt("Disse o Cavaleiro ca??do no ch??o sem seu elmo. [ENTER]")
            console.log()
            let escolha6 = +prompt("O que voc?? faz? [1]MATAR [2]POUPAR: ")
            while(escolha6 != 1 && escolha6 != 2) {
                console.log("\nN??MERO INV??LIDO!")
                escolha6 = +prompt("O que voc?? faz? [1]MATAR [2]POUPAR: ")
                console.log()
            }
            if (escolha6 == 1) {
                if (kills == 5) {
                    prompt("'N??o estou nem um pouco surpreso com sua decis??o.' [ENTER]")
                    console.log()
                    prompt("Voc?? tira a vida do ??ltimo inimigo. [ENTER]")
                    kills++
                } else {
                    prompt("Voc?? tira a vida do Cavaleiro Fantasma. [ENTER]")
                    kills++
                }
            } else if (escolha6 == 2) {
                if (kills == 5) {
                    prompt("'Estou surpreso que tenha poupado ao menos uma vida.' [ENTER]")
                } else if (kills == 0) {
                    prompt("'Voc?? possui mesmo um cora????o muito nobre.' [ENTER]")
                } else {
                    prompt("'Agrade??o por poupares minha vida.' [ENTER]")
                }
                console.clear()
                console.log("O Cavaleiro continua:\n")
                if (personagem == 1) {
                    if (statusJogador.grupo >= 1) {
                        prompt("'Mordog ainda n??o se recuperou completamente da ??ltima batalha.' [ENTER]")
                        console.log("\n'Voc??s ainda t??m uma chance de derrot??-lo.'")
                        prompt("'Mas pe??o que pensem melhor no que est??o fazendo.' [ENTER]")
                        console.log("\n'Ele possui o poder necess??rio para trazer todos de volta ?? vida.'")
                        prompt("'Sei que deve ser dif??cil para voc??s acreditarem.' [ENTER]")
                        console.clear()
                        console.log("\n'Se voc??s matarem Mordog estar??o destruindo tamb??m 1 milh??o de almas.'")
                        console.log("'Se confiarem nele podem traz??-las de volta, ou serem mortos depois que ele se recuperar.'\n")
                        prompt("'A escolha do que acontece em seguida cabe apenas a voc??s.' [ENTER]")
                        console.log()
                        prompt("\nO Cavaleiro Fantasma monta em seu cavalo e vai embora. [ENTER]")
                    } else {
                        prompt("'Mordog ainda n??o se recuperou completamente da ??ltima batalha.' [ENTER]")
                        console.log("\n'Voc?? ainda t??m uma chance de derrot??-lo.'")
                        prompt("'Mas pe??o que pense melhor no que est?? fazendo.' [ENTER]")
                        console.log("\n'Ele possui o poder necess??rio para trazer todos de volta ?? vida.'")
                        prompt("'Sei que deve ser dif??cil para voc?? acreditar.' [ENTER]")
                        console.clear()
                        console.log("\n'Se voc?? matar Mordog estar?? destruindo tamb??m 1 milh??o de almas.'")
                        console.log("'Se confiar nele pode traz??-las de volta, ou ser morto depois que ele se recuperar.'\n")
                        prompt("'A escolha do que acontece em seguida cabe apenas a voc??.' [ENTER]")
                        console.log()
                        prompt("\nO Cavaleiro Fantasma monta em seu cavalo e vai embora. [ENTER]")
                    }
                } else if (personagem == 2) {
                    if (statusJogador.grupo >= 1) {
                        prompt("'Mordog ainda n??o se recuperou completamente da ??ltima batalha.' [ENTER]")
                        console.log("\n'Voc??s ainda t??m uma chance de derrot??-lo.'")
                        prompt("'Mas pe??o que pensem melhor no que est??o fazendo.' [ENTER]")
                        console.log("\n'Ele possui o poder necess??rio para trazer todos de volta ?? vida.'")
                        prompt("'Sei que deve ser dif??cil para voc??s acreditarem.' [ENTER]")
                        console.clear()
                        console.log("\n'Se voc??s matarem Mordog estar??o destruindo tamb??m 1 milh??o de almas.'")
                        console.log("'Se confiarem nele podem traz??-las de volta, ou serem mortas depois que ele se recuperar.'\n")
                        prompt("'A escolha do que acontece em seguida cabe apenas a voc??s.' [ENTER]")
                        console.log()
                        prompt("\nO Cavaleiro Fantasma monta em seu cavalo e vai embora. [ENTER]")
                    } else {
                        prompt("'Mordog ainda n??o se recuperou completamente da ??ltima batalha.' [ENTER]")
                        console.log("\n'Voc?? ainda t??m uma chance de derrot??-lo.'")
                        prompt("'Mas pe??o que pense melhor no que est?? fazendo.' [ENTER]")
                        console.log("\n'Ele possui o poder necess??rio para trazer todos de volta ?? vida.'")
                        prompt("'Sei que deve ser dif??cil para voc?? acreditar.' [ENTER]")
                        console.clear()
                        console.log("\n'Se voc?? matar Mordog estar?? destruindo tamb??m 1 milh??o de almas.'")
                        console.log("'Se confiar nele pode traz??-las de volta, ou ser morta depois que ele se recuperar.'\n")
                        prompt("'A escolha do que acontece em seguida cabe apenas a voc??.' [ENTER]")
                        console.log()
                        prompt("\nO Cavaleiro Fantasma monta em seu cavalo e vai embora. [ENTER]")
                    }
                }
            }
            statusJogador.aumentarNivel()
            break
        }
        dia8: while (escolhaModo == 1) {
            console.clear()
            statusJogador.aumentarTempo()
            console.log("================ \nONDE TUDO TERMINA")
            console.log()
            if (personagem == 1) {
                if (statusJogador.grupo >= 1) {
                    console.log("Ap??s desmontarem o acampamento, voc??s est??o agora a poucos quil??metros de dist??ncia da montanha.\n")
                    prompt("[ENTER]")
                    console.log("\nVoc??s sabem que esse ?? um dia decisivo na sua miss??o: vencer ou fracassar.")
                    console.log("Mas ser?? que vencer ou fracassar n??o pode ser apenas uma quest??o de ponto de vista?")
                    prompt("[ENTER]")
                    console.clear()
                    prompt("Voc??s chegam at?? a entrada de uma caverna na base da grande montanha. [ENTER]")
                    console.log("\nMas n??o ?? uma caverna qualquer, ela possui paredes e desenhos esculpidos em seu interior.")
                    prompt("[ENTER]")
                    console.log("\nMais no interior voc??s encontram um sal??o gigantesco.")
                    console.log("Nesse sal??o h?? um homem alto vestindo uma bela capa preta que cobre todo o seu corpo.")
                    prompt("Voc??s j?? sabem quem ?? esse homem. [ENTER]")
                    console.clear()
                    console.log("Mordog ent??o come??a a falar:\n")
                    prompt(`'${statusJogador.nome} e Jhonny, estava esperando voc??s, sei o que vieram fazer aqui.' [ENTER]`)
                    console.log("\n'Sei que vieram vingar seu povo e todos aqueles que eu supostamente roubei as almas.'")
                    prompt("'Mas eu perdi pessoas que amava e vou usar esse poder para traz??-las de volta. [ENTER]'")
                    console.log("\n'Depois as almas ficar??o livres para voltarem para casa.'")
                    prompt("'Estou t??o perto de concluir meu plano, n??o posso deixar que voc??s atrapalhem.' [ENTER]")
                    if(statusJogador.amuleto >= 1){
                        console.log()
                        prompt("'Esse amuleto m??gico que est?? usando n??o lhe salvar??.'")
                    }
                    if(kills == 6) {
                        console.log("\n'Al??m disso, Voc??s mataram todos os meus leais companheiros.'")
                        console.log("'Desse modo ?? imposs??vel que eu lhes d?? piedade.'")
                        prompt("[ENTER]")
                        mordog.alterarAtributos(1)
                    } else {
                        mordog.alterarAtributos()
                    }
                } else {
                    console.log("Ap??s desmontar o acampamento, voc?? est?? agora a poucos quil??metros de dist??ncia da montanha.\n")
                    prompt("[ENTER]")
                    console.log("\nVoc?? sabe que esse ?? um dia decisivo na sua miss??o: vencer ou fracassar.")
                    console.log("Mas ser?? que vencer ou fracassar n??o pode ser apenas uma quest??o de ponto de vista?")
                    prompt("[ENTER]")
                    console.clear()
                    prompt("Voc?? chega at?? a entrada de uma caverna na base da grande montanha. [ENTER]")
                    console.log("\nMas n??o ?? uma caverna qualquer, ela possui paredes e desenhos esculpidos em seu interior.")
                    prompt("[ENTER]")
                    console.log("\nMais no interior voc?? encontra um sal??o gigantesco.")
                    console.log("Nesse sal??o h?? um homem alto vestindo uma bela capa preta que cobre todo o seu corpo.")
                    prompt("Voc?? j?? sabe quem ?? esse homem. [ENTER]")
                    console.clear()
                    console.log("Mordog ent??o come??a a falar:\n")
                    prompt(`'${statusJogador.nome} ,estava esperando voc??, sei o que veio fazer aqui.' [ENTER]`)
                    console.log("\n'Sei que veio vingar seu povo e todos aqueles que eu supostamente roubei as almas.'")
                    prompt("'Mas eu perdi pessoas que amava e vou usar esse poder para traz??-las de volta. [ENTER]'")
                    console.log("\n'Depois as almas ficar??o livres para voltarem para casa.'")
                    prompt("'Estou t??o perto de concluir meu plano, n??o posso deixar que voc?? atrapalhe.' [ENTER]")
                    if(statusJogador.amuleto >= 1){
                        console.log()
                        prompt("'Esse amuleto m??gico que est?? usando n??o lhe salvar??.'")
                    }
                    if(kills == 6) {
                        console.log("\n'Al??m disso, Voc?? matou todos os meus leais companheiros.'")
                        console.log("'Desse modo ?? imposs??vel que eu lhe d?? piedade.'")
                        mordog.alterarAtributos(1)
                        prompt("[ENTER]")
                    } else {
                        mordog.alterarAtributos()
                    }
                }
            } else if (personagem == 2) {
                if (statusJogador.grupo >= 1) {
                    console.log("Ap??s desmontarem o acampamento, voc??s est??o agora a poucos quil??metros de dist??ncia da montanha.\n")
                    prompt("[ENTER]")
                    console.log("\nVoc??s sabem que esse ?? um dia decisivo na sua miss??o: vencer ou fracassar.")
                    console.log("Mas ser?? que vencer ou fracassar n??o pode ser apenas uma quest??o de ponto de vista?")
                    prompt("[ENTER]")
                    console.clear()
                    prompt("Voc??s chegam at?? a entrada de uma caverna na base da grande montanha. [ENTER]")
                    console.log("\nMas n??o ?? uma caverna qualquer, ela possui paredes e desenhos esculpidos em seu interior.")
                    prompt("[ENTER]")
                    console.log("\nMais no interior voc??s encontram um sal??o gigantesco.")
                    console.log("Nesse sal??o h?? um homem alto vestindo uma bela capa preta que cobre todo o seu corpo.")
                    prompt("Voc??s j?? sabem quem ?? esse homem. [ENTER]")
                    console.clear()
                    console.log("Mordog ent??o come??a a falar:\n")
                    prompt(`'${statusJogador.nome} e Amanda, estava esperando voc??s, sei o que vieram fazer aqui.' [ENTER]`)
                    console.log("\n'Sei que vieram vingar seu povo e todos aqueles que eu supostamente roubei as almas.'")
                    prompt("'Mas eu perdi pessoas que amava e vou usar esse poder para traz??-las de volta. [ENTER]'")
                    console.log("\n'Depois as almas ficar??o livres para voltarem para casa.'")
                    prompt("'Estou t??o perto de concluir meu plano, n??o posso deixar que voc??s atrapalhem.' [ENTER]")
                    if(statusJogador.amuleto >= 1){
                        console.log()
                        prompt("'Esse amuleto m??gico que est?? usando n??o lhe salvar??.'")
                    }
                    if(kills == 6) {
                        console.log("\n'Al??m disso, Voc??s mataram todos os meus leais companheiros.'")
                        console.log("'Desse modo ?? imposs??vel que eu lhes d?? piedade.'")
                        mordog.alterarAtributos(1)
                        prompt("[ENTER]")
                    } else {
                        mordog.alterarAtributos()
                    }
                } else {
                    console.log("Ap??s desmontar o acampamento, voc?? est?? agora a poucos quil??metros de dist??ncia da montanha.\n")
                    prompt("[ENTER]")
                    console.log("\nVoc?? sabe que esse ?? um dia decisivo na sua miss??o: vencer ou fracassar.")
                    console.log("Mas ser?? que vencer ou fracassar n??o pode ser apenas uma quest??o de ponto de vista?")
                    prompt("[ENTER]")
                    console.clear()
                    prompt("Voc?? chega at?? a entrada de uma caverna na base da grande montanha. [ENTER]")
                    console.log("\nMas n??o ?? uma caverna qualquer, ela possui paredes e desenhos esculpidos em seu interior.")
                    prompt("[ENTER]")
                    console.log("\nMais no interior voc?? encontra um sal??o gigantesco.")
                    console.log("Nesse sal??o h?? um homem alto vestindo uma bela capa preta que cobre todo o seu corpo.")
                    prompt("Voc?? j?? sabe quem ?? esse homem. [ENTER]")
                    console.clear()
                    console.log("Mordog ent??o come??a a falar:\n")
                    prompt(`'${statusJogador.nome} ,estava esperando voc??, sei o que veio fazer aqui.' [ENTER]`)
                    console.log("\n'Sei que veio vingar seu povo e todos aqueles que eu supostamente roubei as almas.'")
                    prompt("'Mas eu perdi pessoas que amava e vou usar esse poder para traz??-las de volta. [ENTER]'")
                    console.log("\n'Depois as almas ficar??o livres para voltarem para casa.'")
                    prompt("'Estou t??o perto de concluir meu plano, n??o posso deixar que voc?? atrapalhe.' [ENTER]")
                    if(statusJogador.amuleto >= 1){
                        console.log()
                        prompt("'Esse amuleto m??gico que est?? usando n??o lhe salvar??.'")
                    }
                    if(kills == 6) {
                        console.log("\n'Al??m disso, Voc?? matou todos os meus leais companheiros.'")
                        console.log("'Desse modo ?? imposs??vel que eu lhe d?? piedade.'")
                        mordog.alterarAtributos(1)
                        prompt("[ENTER]")
                    } else {
                        mordog.alterarAtributos()
                    }
                }
            }
            backup(1,statusJogador)
            rodada = 0
            while(true){
                rodada++
                console.clear()
                console.log(`RODADA ${rodada}:`)
                console.log("===========")
                console.log()
                console.log("Mordog ataca.")
                mordog.jogada()
                console.log(`\nVida ${statusJogador.nome}: ${statusJogador.vida}`)
                console.log(`Vida ${mordog.nome}: ${mordog.vida}`)
                if (statusJogador.vida <= 0) {
                    console.log("\nVOC?? MORREU.")
                    backup(2,statusJogador)
                    let z = +prompt("\nGostaria de jogar o cap??tulo novamente? [1]SIM [2]N??O: ")
                    while (z != 1 && z != 2) {
                        console.log("\nN??MERO INV??LIDO!")
                        z = +prompt("\nGostaria de jogar o cap??tulo novamente? [1]SIM [2]N??O: ")
                    }
                    if (z == 1){
                        continue dia8
                    } else {
                    break jogo
                    }
                }
                statusJogador.opcoesDeJogada('mordog')
                if (mordog.vida <= 0) {
                    break
                }
            }
            backup(2,statusJogador)
            console.clear()
            if (personagem == 1) {
                if (statusJogador.grupo >= 1) {
                    prompt("'Voc??s conseguiram mesmo me derrotar, foi uma batalha digna.' [ENTER]")
                    console.log()
                    prompt("'Mas saibam que nunca foi nada pessoal, eu ...' [ENTER]")
                    console.log()
                    console.log("'... eu s?? queria poder ver a minha fam??lia de novo.'")
                    prompt("L??grimas saem dos olhos do bruxo. [ENTER]")
                    console.log("\n'E pretendo velos de novo'.")
                    prompt("'Mesmo depois da derrota, voc??s n??o v??o conseguir me impedir.' [ENTER]")
                } else {
                    prompt("'Voc?? conseguiu mesmo me derrotar, foi uma batalha digna.' [ENTER]")
                    console.log()
                    prompt("'Mas saiba que nunca foi nada pessoal, eu ...' [ENTER]")
                    console.log()
                    console.log("'... eu s?? queria poder ver a minha fam??lia de novo.'")
                    prompt("L??grimas saem dos olhos do bruxo. [ENTER]")
                    console.log("\n'E pretendo velos de novo'.")
                    prompt("'Mesmo depois da derrota, voc?? n??o vai conseguir me impedir.' [ENTER]")
                }
            } else if (personagem == 2) {
                if (statusJogador.grupo >= 1) {
                    prompt("'Voc??s conseguiram mesmo me derrotar, foi uma batalha digna.' [ENTER]")
                    console.log()
                    prompt("'Mas saibam que nunca foi nada pessoal, eu ...' [ENTER]")
                    console.log()
                    console.log("'... eu s?? queria poder ver a minha fam??lia de novo.'")
                    prompt("L??grimas saem dos olhos do bruxo. [ENTER]")
                    console.log("\n'E pretendo velos de novo'.")
                    prompt("'Mesmo depois da derrota, voc??s n??o v??o conseguir me impedir.' [ENTER]")
                } else {
                    prompt("'Voc?? conseguiu mesmo me derrotar, foi uma batalha digna.' [ENTER]")
                    console.log()
                    prompt("'Mas saiba que nunca foi nada pessoal, eu ...' [ENTER]")
                    console.log()
                    console.log("'... eu s?? queria poder ver a minha fam??lia de novo.'")
                    prompt("L??grimas saem dos olhos do bruxo. [ENTER]")
                    console.log("\n'E pretendo velos de novo'.")
                    prompt("'Mesmo depois da derrota, voc?? n??o vai conseguir me impedir.' [ENTER]")
                }
            }
            console.clear()
            console.log("Ent??o o corpo inteiro de Mordog come??a a brilhar.")
            if (personagem == 1) {
                if (statusJogador.grupo >= 1) {
                    console.log("\nJhonny fala:")
                    console.log("'Parece que ele est?? usando sua energia restante para fazer a magia, mas como ele consegue?'")
                    prompt("[ENTER]")
                } else {
                    console.log("\nVoc?? pensa consigo mesmo:")
                    console.log("'Parece que ele est?? usando sua energia restante para fazer a magia, mas como ele consegue?'")
                    prompt("[ENTER]")
                }
            } else if (personagem == 2) {
                if (statusJogador.grupo >= 1) {
                    console.log("\nAmanda fala:")
                    console.log("'Parece que ele est?? usando sua energia restante para fazer a magia, mas como ele consegue?'")
                    prompt("[ENTER]")
                } else {
                    console.log("\nVoc?? pensa consigo mesma:")
                    console.log("'Parece que ele est?? usando sua energia restante para fazer a magia, mas como ele consegue?'")
                    prompt("[ENTER]")
                }
            }
            console.log("\nAs almas come??am a sair de seu corpo como se fossem r??pidos feixes de luz se dirigindo ?? sa??da da caverna.")
            prompt("[ENTER]")
            console.log("\nE de repente as almas adquiriram forma.")
            console.log("Todos aqueles que estavam aprisionados come??avam a reaparecer onde deveriam estar.")
            prompt("[ENTER]")
            console.clear()
            console.log("E ali estavam, abra??ados no bruxo, sua esposa e seu filho que haviam retornado.")
            prompt("[ENTER]")
            console.log("\nMas a felicidade n??o durou muito, Mordog estava t??o determinado que usou tudo o que restara de sua energia vital.")
            console.log("Desse modo, ele s?? poderia aproveitar mais alguns minutos com sua fam??lia.")
            prompt("[ENTER]")
            console.clear()
            prompt("E nesse momento voc?? se lembra de tudo o que passou em sua jornada at?? ali. [ENTER]")
            console.log()
            prompt("Voc?? se lembra das batalhas que aconteceram. [ENTER]")
            console.log()
            prompt("Voc?? se lembra das escolhas que teve de fazer. [ENTER]")
            console.log()
            if(statusJogador.pocao >= 1) {
                console.log("Ent??o voc?? se lembra da po????o de cura que seu vizinho elfo lhe deu antes de partir.")
                let final = +prompt("Voc?? entrega a po????o para Mordog? [1]SIM [2]N??O: ")
                while(final != 1 && final != 2) {
                    console.log("\nN??MERO INV??LIDO!")
                    final = +prompt("Voc?? entrega a po????o para Mordog? [1]SIM [2]N??O: ")
                }
                console.clear()
                if (final == 1) {
                    prompt("Voc?? entrega a po????o para Mordog, ele bebe e ?? magicamente curado. [ENTER]")
                } else {
                    prompt("Mordog realiza seu desejo de ver sua fam??lia, mas acaba n??o resistindo ao seu pr??prio feiti??o. [ENTER]")
                }
            } else
            prompt("Mordog consegue realizar seu desejo de ver sua fam??lia, mas acaba n??o resistindo ao seu pr??prio feiti??o. [ENTER]")
            if (personagem == 1) {
                if (statusJogador.grupo >= 1) {
                    console.log("\nVoc?? e Jhonny retornam para a terra de Blue, sua casa, para reencontrar seus amigos e familiares que voltaram.")
                    console.log(`\n${statusJogador.nome}, parab??ns pela aventura!`)
                } else {
                    console.log("\nVoc?? retorna para a terra de Blue, sua casa, para reencontrar seus amigos e familiares que voltaram.")
                    console.log(`\n${statusJogador.nome}, parab??ns pela aventura!`)
                }
            } else if (personagem == 2) {
                if (statusJogador.grupo >= 1) {
                    console.log("\nVoc?? e Amanda retornam para a terra de Blue, sua casa, para reencontrar seus amigos e familiares que voltaram.")
                    console.log(`\n${statusJogador.nome}, parab??ns pela aventura!`)
                } else {
                    console.log("\nVoc?? retorna para a terra de Blue, sua casa, para reencontrar seus amigos e familiares que voltaram.")
                    console.log(`\n${statusJogador.nome}, parab??ns pela aventura!`)
                }
            }
            console.log()
            prompt(`[ENTER]`)
            break
        }
        modoSobreviv??ncia: while (escolhaModo == 2) {
            backup(1,statusJogador)
            rodada = 0
            numeroOponente++
            let selecaoDeOponente = Math.floor(Math.random() * 6)
            if (selecaoDeOponente == 0) {
                goblin.alterarAtributos()
                while(true){
                    rodada++
                    console.clear()
                    console.log(`OPONENTE ${numeroOponente} \nRODADA ${rodada}:`)
                    console.log("===========")
                    console.log()
                    console.log(`Goblin n??vel ${statusJogador.nivel} ataca.`)
                    goblin.jogada()
                    console.log(`\nVida ${statusJogador.nome}: ${statusJogador.vida}`)
                    console.log(`Vida ${goblin.nome}: ${goblin.vida}`)
                    if (statusJogador.vida <= 0) {
                        console.log("\nVOC?? MORREU.")
                        backup(2,statusJogador)
                        let z = +prompt("\nGostaria de reiniciar o Modo Sobreviv??ncia? [1]SIM [2]N??O: ")
                        while (z != 1 && z != 2) {
                            console.log("\nN??MERO INV??LIDO!")
                            z = +prompt("\nGostaria de reiniciar o Modo Sobreviv??ncia? [1]SIM [2]N??O: ")
                        }
                        if (z == 1){
                            continue modoSobreviv??ncia
                        } else {
                            break jogo
                        }
                    }
                    statusJogador.opcoesDeJogada('goblin')
                    if (goblin.vida <= 0) {
                        break
                    }
                }
            } else if (selecaoDeOponente == 1) {
                elfoDaFloresta.alterarAtributos()
                while(true){
                    rodada++
                    console.clear()
                    console.log(`OPONENTE ${numeroOponente} \nRODADA ${rodada}:`)
                    console.log("===========")
                    console.log()
                    console.log(`Elfo da Floresta n??vel ${statusJogador.nivel} ataca.`)
                    elfoDaFloresta.jogada()
                    console.log(`\nVida ${statusJogador.nome}: ${statusJogador.vida}`)
                    console.log(`Vida ${elfoDaFloresta.nome}: ${elfoDaFloresta.vida}`)
                    if (statusJogador.vida <= 0) {
                        console.log("\nVOC?? MORREU.")
                        backup(2,statusJogador)
                        let z = +prompt("\nGostaria de reiniciar o Modo Sobreviv??ncia? [1]SIM [2]N??O: ")
                        while (z != 1 && z != 2) {
                            console.log("\nN??MERO INV??LIDO!")
                            z = +prompt("\nGostaria de reiniciar o Modo Sobreviv??ncia? [1]SIM [2]N??O: ")
                        }
                        if (z == 1){
                            continue modoSobreviv??ncia
                        } else {
                            break jogo
                        }
                    }
                    statusJogador.opcoesDeJogada('elfoDaFloresta')
                    if (elfoDaFloresta.vida <= 0) {
                        break
                    }
                }
            } else if (selecaoDeOponente == 2) {
                troll.alterarAtributos()
                while(true){
                    rodada++
                    console.clear()
                    console.log(`OPONENTE ${numeroOponente} \nRODADA ${rodada}:`)
                    console.log("===========")
                    console.log()
                    console.log(`Troll n??vel ${statusJogador.nivel} ataca.`)
                    troll.jogada()
                    console.log(`\nVida ${statusJogador.nome}: ${statusJogador.vida}`)
                    console.log(`Vida ${troll.nome}: ${troll.vida}`)
                    if (statusJogador.vida <= 0) {
                        console.log("\nVOC?? MORREU.")
                        backup(2,statusJogador)
                        let z = +prompt("\nGostaria de reiniciar o Modo Sobreviv??ncia? [1]SIM [2]N??O: ")
                        while (z != 1 && z != 2) {
                            console.log("\nN??MERO INV??LIDO!")
                            z = +prompt("\nGostaria de reiniciar o Modo Sobreviv??ncia? [1]SIM [2]N??O: ")
                        }
                        if (z == 1){
                            continue modoSobreviv??ncia
                        } else {
                            break jogo
                        }
                    }
                    statusJogador.opcoesDeJogada('troll')
                    if (troll.vida <= 0) {
                        break
                    }
                }
            } else if (selecaoDeOponente == 3) {
                dragao.alterarAtributos()
                while(true){
                    rodada++
                    console.clear()
                    console.log(`OPONENTE ${numeroOponente} \nRODADA ${rodada}:`)
                    console.log("===========")
                    console.log()
                    console.log(`Drag??o n??vel ${statusJogador.nivel} ataca.`)
                    dragao.jogada()
                    console.log(`\nVida ${statusJogador.nome}: ${statusJogador.vida}`)
                    console.log(`Vida ${dragao.nome}: ${dragao.vida}`)
                    if (statusJogador.vida <= 0) {
                        console.log("\nVOC?? MORREU.")
                        backup(2,statusJogador)
                        let z = +prompt("\nGostaria de reiniciar o Modo Sobreviv??ncia? [1]SIM [2]N??O: ")
                        while (z != 1 && z != 2) {
                            console.log("\nN??MERO INV??LIDO!")
                            z = +prompt("\nGostaria de reiniciar o Modo Sobreviv??ncia? [1]SIM [2]N??O: ")
                        }
                        if (z == 1){
                            continue modoSobreviv??ncia
                        } else {
                            break jogo
                        }
                    }
                    statusJogador.opcoesDeJogada('dragao')
                    if (dragao.vida <= 0) {
                        break
                    }
                }
            } else if (selecaoDeOponente == 4) {
                bruxa.alterarAtributos()
                while(true){
                    rodada++
                    console.clear()
                    console.log(`OPONENTE ${numeroOponente} \nRODADA ${rodada}:`)
                    console.log("===========")
                    console.log()
                    console.log(`Bruxa n??vel ${statusJogador.nivel} ataca.`)
                    bruxa.jogada()
                    console.log(`\nVida ${statusJogador.nome}: ${statusJogador.vida}`)
                    console.log(`Vida ${bruxa.nome}: ${bruxa.vida}`)
                    if (statusJogador.vida <= 0) {
                        console.log("\nVOC?? MORREU.")
                        backup(2,statusJogador)
                        let z = +prompt("\nGostaria de reiniciar o Modo Sobreviv??ncia? [1]SIM [2]N??O: ")
                        while (z != 1 && z != 2) {
                            console.log("\nN??MERO INV??LIDO!")
                            z = +prompt("\nGostaria de reiniciar o Modo Sobreviv??ncia? [1]SIM [2]N??O: ")
                        }
                        if (z == 1){
                            continue modoSobreviv??ncia
                        } else {
                            break jogo
                        }
                    }
                    statusJogador.opcoesDeJogada('bruxa')
                    if (bruxa.vida <= 0) {
                        break
                    }
                }
            } else if (selecaoDeOponente == 5) {
                cavaleiroFantasma.alterarAtributos()
                while(true){
                    rodada++
                    console.clear()
                    console.log(`OPONENTE ${numeroOponente} \nRODADA ${rodada}:`)
                    console.log("===========")
                    console.log()
                    console.log(`Cavaleiro Fantasma n??vel ${statusJogador.nivel} ataca.`)
                    cavaleiroFantasma.jogada()
                    console.log(`\nVida ${statusJogador.nome}: ${statusJogador.vida}`)
                    console.log(`Vida ${cavaleiroFantasma.nome}: ${cavaleiroFantasma.vida}`)
                    if (statusJogador.vida <= 0) {
                        console.log("\nVOC?? MORREU.")
                        backup(2,statusJogador)
                        let z = +prompt("\nGostaria de reiniciar o Modo Sobreviv??ncia? [1]SIM [2]N??O: ")
                        while (z != 1 && z != 2) {
                            console.log("\nN??MERO INV??LIDO!")
                            z = +prompt("\nGostaria de reiniciar o Modo Sobreviv??ncia? [1]SIM [2]N??O: ")
                        }
                        if (z == 1){
                            continue modoSobreviv??ncia
                        } else {
                            break jogo
                        }
                    }
                    statusJogador.opcoesDeJogada('cavaleiroFantasma')
                    if (cavaleiroFantasma.vida <= 0) {
                        break
                    }
                }
            }
            backup(2,statusJogador)
            console.clear()
            statusJogador.aumentarNivel()
            let saida = +prompt("Gostaria de continuar? 1.[SIM] 2.[N??O]: ")
            while(saida != 1 && saida != 2) {
                console.log("\nN??MERO INV??LIDO!")
                saida = +prompt("Gostaria de continuar? 1.[SIM] 2.[N??O]: ")
            }
            if (saida == 2) {
                console.clear()
                break modoSobreviv??ncia
            }
        }
        console.clear()
        let final1 = prompt("O jogo acabou. Gostaria de come??ar novamente? [1]SIM [2]N??O: ")
        while(final1 != 1 && final1 != 2) {
        console.log("\nN??MERO INV??LIDO!")
        final1 = prompt("O jogo acabou. Gostaria de come??ar novamente? [1]SIM [2]N??O: ")
        }
        if (final1 == 1) {
            console.clear()
            continue
        } else {
            break jogo
        }
    }
}
console.log("\nFIM DE JOGO.")

////Criado por Douglas Volcato
////Github: https://github.com/DouglasVolcato
