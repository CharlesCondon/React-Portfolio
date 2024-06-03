function sphere(p) {
    // eslint-disable-next-line no-unused-vars
    let xOff = 0;
    let yOff = 1;
    let zOff = 2;
    // eslint-disable-next-line no-unused-vars
    let cnv;
    let size;
    let parent;
    let w;

    p.setup = () => {
        if (window.location.pathname === '/about')  {
            parent = document.getElementById("bufferDiv");
            w = parent.offsetWidth;
        } else {
            w = 0
        }
        parent = document.getElementById("bufferDiv");
        w = parent.offsetWidth;

        cnv = p.createCanvas(w, 30, p.WEBGL)
        p.strokeWeight(5)
    };

    p.draw = () => {
        size = Math.floor(((window.innerWidth) * (window.innerHeight/1.25))/800);
        p.background(17, 17, 17, 0);

        p.noFill();
        p.stroke(242,170,76);
        p.translate(0, p.noise(yOff)*p.height*0.01, -p.noise(zOff)*600);
        p.rotateY(p.millis() / 10000);
        p.rotateX(p.millis() / 10000);
        p.sphere(size);
        
        xOff+=0.001;
        yOff+=0.001;
        zOff+=0.001;
    }

    p.windowResized = () => {
        if (window.location.pathname === '/about')  {
            parent = document.getElementById("bufferDiv");
            w = parent.offsetWidth;
        } else {
            w = 0
        }
        p.resizeCanvas(w, 25)
    }
}

export default sphere;