class MainScene extends Phaser.Scene{

    constructor()
    {
        super('MainScene');
    }

    preload(){
        
       this.load.image('button-up', "./src/asset/button-up.png");

       this.load.spritesheet("splash", "./src/asset/splash.png", {frameWidth: 640, frameHeight: 240});


    }

    create() {
        this.splash = this.add.sprite(0, 0, "splash");
        this.splash.setOrigin(0, 0);
        var frameNumbers = this.anims.generateFrameNumbers("splash");

        this.anims.create({
            key: 'draw',
            frameRate: 10,
            frames: frameNumbers,
            repeat: -1
        });
        this.buttonUp = this.add.image(350, 150, "button-up");
        this.buttonUp.setOrigin(0, 0);
        this.buttonUp.setInteractive();

        this.buttonUp.on('pointerdown', () => {
            this.scene.launch("Spin");
            
        },this);

       

        this.splash.play('draw');


    }

    update() {

    }
}