class Spin extends Phaser.Scene {
    
    constructor() {
        super('Spin');
    }

    preload() {

        // this.load.image('button-up', "./src/asset/button-up.png");

        this.load.spritesheet("win", "./src/asset/win.png", { frameWidth: 640, frameHeight: 240 });
        this.load.audio('audio', "./src/asset/DiamondClink_multi2.mp3");

    }
    create() {
        //this.face = this.add.image(100, 100, "button-up");
        //this.face.setInteractive();

        //this.face.on('pointerdown', () => { console.log('pointerover'); });
        this.music = this.sound.add('audio', {loop: 4});
        this.charWin = this.add.sprite(0, 0, "win");
        this.charWin.setOrigin(0, 0);


        var frameNumbers = this.anims.generateFrameNumbers("win");

         var anim = this.anims.create({
            key: 'spin',
            frameRate: 7,
            frames: frameNumbers,
            repeat: 0,
        });

        this.music.play();
        //anim.onStart.add(function() {
        //    this.music.play();

        //}, this);
        //anim.onComplete = function() {
        //    this.music.stop();

        //}, this);

        this.charWin.play('spin');


    }

    update() {
    }
}