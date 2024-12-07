const cursor = document.getElementById("cursor");
    const amount = 20; // Number of dots
    const width = 26;  // Cursor dot size
    const dots = [];
    const mousePosition = { x: 0, y: 0 };

    class Dot {
      constructor(index) {
        this.index = index;
        this.x = 0;
        this.y = 0;
        this.element = document.createElement("span");
        this.scale = 1 - 0.05 * index;
        this.element.style.transform = `scale(${this.scale})`;
        cursor.appendChild(this.element);
      }

      draw(x, y) {
        this.x = x;
        this.y = y;
        this.element.style.transform = `translate(${this.x}px, ${this.y}px) scale(${this.scale})`;
      }
    }

    function createDots() {
      for (let i = 0; i < amount; i++) {
        const dot = new Dot(i);
        dots.push(dot);
      }
    }

    function onMouseMove(event) {
      mousePosition.x = event.clientX - width / 2;
      mousePosition.y = event.clientY - width / 2;
    }

    function render() {
      let x = mousePosition.x;
      let y = mousePosition.y;

      dots.forEach((dot, index) => {
        const nextDot = dots[index + 1] || dots[0];
        dot.draw(x, y);
        x += (nextDot.x - dot.x) * 0.3;
        y += (nextDot.y - dot.y) * 0.3;
      });

      requestAnimationFrame(render);
    }

    // Initialize the custom cursor
    window.addEventListener("mousemove", onMouseMove);
    createDots();
    render();