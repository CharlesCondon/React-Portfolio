function sphere(p) {
    // eslint-disable-next-line no-unused-vars
    let xOff = 0;
    let yOff = 1;
    let zOff = 2;
    // eslint-disable-next-line no-unused-vars
    let cnv;
    let size;

    p.setup = () => {
        
        if (window.innerWidth > 768) {
            cnv = p.createCanvas(window.innerWidth/2-40, window.innerHeight/1.25, p.WEBGL);
        } else {
            cnv = p.createCanvas(window.innerWidth-40, window.innerHeight/1.75, p.WEBGL);
        }
        
    };

    p.draw = () => {
        if (window.innerWidth > 768) {
            size = Math.floor(((window.innerWidth/1.75) * (window.innerHeight/1.25))/2500);
        } else {
            size = Math.floor(((window.innerWidth*1.9) * (window.innerHeight/1.5))/2500);
        }
        
        p.background(17, 17, 17, 0);

        p.noFill();
        p.stroke(242, 170, 76);
        p.strokeWeight(2)
        p.translate(0, 0, -p.noise(zOff)*600);
        p.rotateY(p.millis() / 10000);
        p.rotateX(p.millis() / 10000);
        p.sphere(size);
        p.rotateY((p.millis() / 5000));
        p.rotateX((p.millis() / 5000));
        p.sphere((size/2));
        
        xOff+=0.001;
        yOff+=0.001;
        zOff+=0.001;
    }

    p.windowResized = () => {
        if (window.innerWidth > 768) {
            p.resizeCanvas(window.innerWidth/2-40, window.innerHeight/1.25)
        } else {
            p.resizeCanvas(window.innerWidth-40, window.innerHeight/1.25)
        }
    }
}

export default sphere;