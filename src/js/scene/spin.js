var Spin = new Phaser.Class ({

    Extends: Phaser.Scene,
    key:"Spin",
    
    initialize:

    function Spin ()
    {
        Phaser.Scene.call(this, { key: 'Spin' });
    },
    preload : function() {

        this.load.spritesheet("win", "./src/asset/win.png", {
            frameWidth: 640,
            frameHeight: 240
        });

        
        // this.load.audio('audio', "./src/asset/DiamondClink_multi2.mp3");
        this.load.image('logo', './src/asset/face.png');

    },


    create: function() {

        //this.music = this.sound.add('audio', {loop: 4});
        this.charWin = this.physics.add.sprite(0, 0, "win");
        var logo = this.physics.add.image(0, 0, 'logo');

        logo.setOrigin(0.5, 0);
        logo.setVelocity(0, 60);
        logo.setBounce(2, 1.3);
        logo.setCollideWorldBounds(true);
        

        this.charWin.setOrigin(0, 0);
       

        var number = Phaser.Math.Between(30,60);

        if (number < 30) {
            number = 30 + number;
        }
        if (number % 2 !== 0) {
            number = number + 1;
        }

        

        var frameNumbers = this.anims.generateFrameNumbers("win", {
            prefix: 'prism_',
            end: number,
            zeroPad: 4
        });

        var anim = this.anims.create({
            key: 'spin' + number,
            frameRate: 7,
            frames: frameNumbers,
            repeat: 0,
        });

        //this.music.play();




        this.charWin.play('spin' + number);

    },


    update: function() {
       
    }

});