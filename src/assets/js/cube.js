function cube(p) {
    // eslint-disable-next-line no-unused-vars
    let xOff = 0;
    let yOff = 1;
    let zOff = 2;
    // eslint-disable-next-line no-unused-vars
    let cnv;
    let size;

    p.setup = () => {
        
        if (window.innerWidth > 768) {
            cnv = p.createCanvas(window.innerWidth/2.5, window.innerHeight/1.25, p.WEBGL);
        } else {
            cnv = p.createCanvas(window.innerWidth, window.innerHeight/1.25, p.WEBGL);
        }
        
    };

    p.draw = () => {
        if (window.innerWidth > 768) {
            size = Math.floor(((window.innerWidth/1.75) * (window.innerHeight/1.25))/2500);
        } else {
            size = Math.floor(((window.innerWidth*1.5) * (window.innerHeight/1.25))/2500);
        }
        
        p.background(17, 17, 17, 0);

        p.noFill();
        p.stroke(242, 170, 76);
        p.translate(0, p.noise(yOff)*p.height*0.01, -p.noise(zOff)*600);
        p.rotateY(p.millis() / 10000);
        p.box(size);
        p.box((size/2));
        p.rotateX(p.millis() / 10000);
        p.box(size);
        p.box((size/2));
        p.rotateY((p.millis() / 5000));
        p.box(size);
        p.box((size/2));
        p.rotateX((p.millis() / 5000));
        p.box((size/2));
        
        xOff+=0.001;
        yOff+=0.001;
        zOff+=0.001;
    }

    p.windowResized = () => {
        if (window.innerWidth > 768) {
            p.resizeCanvas(window.innerWidth/2.5, window.innerHeight/1.25)
        } else {
            p.resizeCanvas(window.innerWidth, window.innerHeight/1.25)
        }
    }
}

export default cube;