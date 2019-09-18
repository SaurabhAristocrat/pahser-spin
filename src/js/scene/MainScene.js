
var MainScene  = new Phaser.Class ({

    Extends: Phaser.Scene,
    
    initialize:

    function MainScene ()
    {
        Phaser.Scene.call(this, { key: 'MainScene' });
    },

   preload : function(){

      this.load.image('button-up', "./src/asset/button-up.png");
     this.load.spritesheet("splash", "./src/asset/splash.png", {frameWidth: 640, frameHeight: 240});


   },

   create : function() {
       this.splash = this.add.sprite(0, 0, "button-up");
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


   },

   update: function() {

   }
});