/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import Sketch from 'react-p5';
function RadarChart({
  coverBg,
  mainColor,
  image,
  dataSets,
}: {
  coverBg?: string;
  mainColor?: string;
  image?: string;
  dataSets?: {
    scaleTitles: string[];
    scaleTicksCount: number[];
    scaleValues: number[];
  };
}) {
  const scaleTitles = dataSets?.scaleTitles ?? ['家計', '住環境', '万が一', '老後', '災害', '病気', 'その他'];
  const scaleTicksCount = dataSets?.scaleTicksCount ?? [5, 5, 2, 3, 4, 6, 7];
  const scaleValues = dataSets?.scaleValues ?? [5, 5, 2, 3, 4, 6, 7];
  let started = false;
  const diagramRadius = 90;
  const innerRadius = 20;

  const preload = (p: any) => {
    p.img = p.loadImage(image ?? 'images/skull.svg');
  };
  const setup = (p: any, canvasParentRef: any) => {
    if (started) {
      p.remove();
      return;
    }
    started = true;
    p.createCanvas(330, 300, p.P2D).parent(canvasParentRef);
  };
  const draw = (p: any) => {
    p.background('#ffffff');
    p.translate(0, 8);
    p.angleMode(p.DEGREES);
    p.translate(p.width / 2, p.height / 2);

    // title
    // p.fill('#333');
    p.noStroke();
    for (let i = 0; i < scaleTicksCount.length; i++) {
      const angle1 = (360 / scaleTicksCount.length) * i;
      const px1 = +p.sin(angle1) * (diagramRadius + 65);
      const py1 = -p.cos(angle1) * (diagramRadius + 45);

      p.textAlign(p.CENTER, p.CENTER);
      p.noStroke();
      p.fill('#333');
      p.textSize(16);
      p.textStyle(p.BOLD);
      p.text(scaleTitles[i], px1, py1);
    }

    // background
    p.fill('#F6F6F6');
    p.noStroke();
    for (let i = 0; i < scaleTicksCount.length; i++) {
      const angle1 = (360 / scaleTicksCount.length) * i;
      const px1 = +p.sin(angle1) * (diagramRadius + innerRadius);
      const py1 = -p.cos(angle1) * (diagramRadius + innerRadius);

      const angle2 = (360 / scaleTicksCount.length) * (i + 1);
      const px2 = +p.sin(angle2) * (diagramRadius + innerRadius);
      const py2 = -p.cos(angle2) * (diagramRadius + innerRadius);
      p.triangle(0, 0, px1, py1, px2, py2);
    }

    // covered background
    p.fill(coverBg ?? 'rgba(44, 141, 39, 0.3)');
    p.noStroke();
    for (let i = 0; i < scaleTicksCount.length; i++) {
      const angle1 = (360 / scaleTicksCount.length) * i;
      const px1 = +p.sin(angle1) * (innerRadius + diagramRadius * (scaleValues[i] / scaleTicksCount[i]));
      const py1 = -p.cos(angle1) * (innerRadius + diagramRadius * (scaleValues[i] / scaleTicksCount[i]));

      const nextIndex = (i + 1) % 7;
      const angle2 = (360 / scaleTicksCount.length) * (i + 1);
      const px2 =
        +p.sin(angle2) * (innerRadius + diagramRadius * (scaleValues[nextIndex] / scaleTicksCount[nextIndex]));
      const py2 =
        -p.cos(angle2) * (innerRadius + diagramRadius * (scaleValues[nextIndex] / scaleTicksCount[nextIndex]));
      p.triangle(0, 0, px1, py1, px2, py2);

      p.push();
      p.fill(mainColor ?? '#2C8D27');
      p.stroke(mainColor ?? '#2C8D27');
      p.strokeWeight(3);
      if (scaleValues[i] !== 0) {
        p.circle(px1, py1, 5);
      }
      p.line(px1, py1, px2, py2);
      p.pop();
    }

    p.push();
    p.rotate(180);
    for (let i = 0; i < scaleTicksCount.length; i++) {
      p.noFill();
      p.stroke(mainColor ?? '#2C8D27');
      // trục
      p.line(0, 0, 0, diagramRadius + innerRadius);
      // vach chia tren truc
      for (let j = 1; j <= scaleTicksCount[i]; j++) {
        p.line(
          -3,
          innerRadius + j * (diagramRadius / scaleTicksCount[i]),
          3,
          innerRadius + j * (diagramRadius / scaleTicksCount[i])
        );
      }
      p.rotate(360 / scaleTicksCount.length);
    }
    p.pop();

    p.fill(mainColor ?? '#2C8D27');
    p.stroke(mainColor ?? '#2C8D27');
    for (let i = 0; i < scaleTicksCount.length; i++) {
      const angle1 = (360 / scaleTicksCount.length) * i;
      const px1 = +p.sin(angle1) * innerRadius;
      const py1 = -p.cos(angle1) * innerRadius;

      const angle2 = (360 / scaleTicksCount.length) * (i + 1);
      const px2 = +p.sin(angle2) * innerRadius;
      const py2 = -p.cos(angle2) * innerRadius;
      p.triangle(0, 0, px1, py1, px2, py2);
    }

    p.image(p.img, -9, -9, 18, 18, 0, 0, 25, 25);
    // p.remove();
  };

  return <Sketch draw={draw} preload={preload} setup={setup} />;
}

export default RadarChart;
