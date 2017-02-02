﻿/*
 * Copyright (c) 2016 - now David Sehnal, licensed under Apache 2.0, See LICENSE file for more info.
 */

namespace LiteMol.Visualization.Molecule.Colors {
             
    export const DefaultBondColor: Color = { r: 0.6, g: 0.6, b: 0.6 };
    export const DefaultElementColor = { r: 0.6, g: 0.6, b: 0.6 };
    export const DefaultElementColorMap: Theme.ColorMap = Core.Utils.FastMap.create<string, Color>();
    export const DefaultPallete: Color[] = [];
    
    (function () {
        let colors = [["Ac",0.43921,0.67058,0.98039],["Al",0.74901,0.65098,0.65098],["Am",0.32941,0.36078,0.94901],["Sb",0.6196,0.38823,0.7098],["Ar",0.50196,0.8196,0.89019],["As",0.74117,0.50196,0.89019],["At",0.45882,0.3098,0.27058],["Ba",0,0.78823,0],["Bk",0.54117,0.3098,0.89019],["Be",0.76078,1,0],["Bi",0.6196,0.3098,0.7098],["Bh",0.87843,0,0.2196],["B",1,0.7098,0.7098],["Br",0.65098,0.16078,0.16078],["Cd",1,0.85098,0.56078],["Ca",0.23921,1,0],["Cf",0.63137,0.21176,0.83137],["C",0.45,0.45,0.45],["Ce",1,1,0.78039],["Cs",0.34117,0.09019,0.56078],["Cl",0.12156,0.94117,0.12156],["Cr",0.54117,0.6,0.78039],["Co",0.94117,0.5647,0.62745],["Cu",0.78431,0.50196,0.2],["Cm",0.47058,0.36078,0.89019],["D",0.9,0.9,0.9],["Db",0.8196,0,0.3098],["Dy",0.12156,1,0.78039],["Es",0.70196,0.12156,0.83137],["Er",0,0.90196,0.45882],["Eu",0.38039,1,0.78039],["Fm",0.70196,0.12156,0.72941],["F",0.70196,1,1],["Fr",0.25882,0,0.4],["Gd",0.27058,1,0.78039],["Ga",0.76078,0.56078,0.56078],["Ge",0.4,0.56078,0.56078],["Au",1,0.8196,0.13725],["Hf",0.30196,0.76078,1],["Hs",0.90196,0,0.18039],["He",0.85098,1,1],["Ho",0,1,0.61176],["H",0.9,0.9,0.9],["In",0.65098,0.45882,0.45098],["I",0.58039,0,0.58039],["Ir",0.09019,0.32941,0.52941],["Fe",0.698,0.13,0.13],["Kr",0.36078,0.72156,0.8196],["La",0.43921,0.83137,1],["Lr",0.78039,0,0.4],["Pb",0.34117,0.34901,0.38039],["Li",0.8,0.50196,1],["Lu",0,0.67058,0.14117],["Mg",0.54117,1,0],["Mn",0.61176,0.47843,0.78039],["Mt",0.92156,0,0.14901],["Md",0.70196,0.05098,0.65098],["Hg",0.72156,0.72156,0.81568],["Mo",0.32941,0.7098,0.7098],["Nd",0.78039,1,0.78039],["Ne",0.70196,0.89019,0.96078],["Np",0,0.50196,1],["Ni",0.31372,0.81568,0.31372],["Nb",0.45098,0.76078,0.78823],["N",0,0.5,1],["No",0.74117,0.05098,0.52941],["Os",0.14901,0.4,0.58823],["O",1,0.3,0.3],["Pd",0,0.41176,0.52156],["P",1,0.50196,0],["Pt",0.81568,0.81568,0.87843],["Pu",0,0.4196,1],["Po",0.67058,0.36078,0],["K",0.56078,0.25098,0.83137],["Pr",0.85098,1,0.78039],["Pm",0.63921,1,0.78039],["Pa",0,0.63137,1],["Ra",0,0.49019,0],["Rn",0.25882,0.5098,0.58823],["Re",0.14901,0.49019,0.67058],["Rh",0.03921,0.49019,0.54901],["Rb",0.43921,0.18039,0.69019],["Ru",0.14117,0.56078,0.56078],["Rf",0.8,0,0.34901],["Sm",0.56078,1,0.78039],["Sc",0.90196,0.90196,0.90196],["Sg",0.85098,0,0.27058],["Se",1,0.63137,0],["Si",0.94117,0.78431,0.62745],["Ag",0.75294,0.75294,0.75294],["Na",0.67058,0.36078,0.94901],["Sr",0,1,0],["S",0.9,0.775,0.25],["Ta",0.30196,0.65098,1],["Tc",0.23137,0.6196,0.6196],["Te",0.83137,0.47843,0],["Tb",0.18823,1,0.78039],["Tl",0.65098,0.32941,0.30196],["Th",0,0.72941,1],["Tm",0,0.83137,0.32156],["Sn",0.4,0.50196,0.50196],["Ti",0.74901,0.76078,0.78039],["W",0.12941,0.58039,0.83921],["U",0,0.56078,1],["V",0.65098,0.65098,0.67058],["Xe",0.25882,0.6196,0.69019],["Yb",0,0.74901,0.2196],["Y",0.58039,1,1],["Zn",0.49019,0.50196,0.69019],["Zr",0.58039,0.87843,0.87843]];
        
        for (let c of colors) {
            let n: string = <any>c[0];
            let clr = { r: <any>c[1], g: <any>c[2], b: <any>c[3] };
            (DefaultElementColorMap as Core.Utils.FastMap<string, Color>).set(n, clr);
            (DefaultElementColorMap as Core.Utils.FastMap<string, Color>).set(n.toUpperCase(), clr);
            (DefaultElementColorMap as Core.Utils.FastMap<string, Color>).set(n.toLowerCase(), clr);
            DefaultPallete.push(clr);
        }   
    })();
}