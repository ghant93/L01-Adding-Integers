var sketch = {
  "metadata": {
    "width": 1133,
    "height": 691,
    "wsp-version": "4.5.1",
    "wsp-build-number": "1020.5-r",
    "wsp-build-stamp": "ip-10-149-70-76/20160706131225",
    "exporter-version": "6.00A3007(dev)",
    "exporter-build": "3007(dev)",
    "original-document-name": "L02 Adding Integers.gsp",
    "start-page": "1"
  },
  "resources": {
    "fontList": [
      "\"Comic Sans MS\", sans-serif"
    ]
  },
  "pages": [
    {
      "metadata": {
        "title": "1",
        "id": "1",
        "sketchRect": {
          "top": -31,
          "left": -3,
          "bottom": 660,
          "right": 1130
        }
      },
      "preferences": {
        "units": {
          "length": "cm",
          "angle": "deg"
        },
        "precision": {
          "length": 2,
          "angle": 2,
          "scalar": 2
        },
        "colorableComponents": {
          "Points": {
            "color": "rgb(0,0,252)"
          },
          "Straights": {
            "color": "rgb(0,126,0)"
          },
          "Curves": {
            "color": "black"
          },
          "Interior": {
            "color": "yellow"
          },
          "Plot": {
            "color": "rgb(0,125,0)"
          },
          "PointLocus": {
            "color": "rgb(121,0,0)"
          },
          "Selection": {
            "color": "rgb(188,0,188)"
          },
          "Background": {
            "color": "rgb(248,248,248)"
          },
          "ActionButton": {
            "color": "rgb(160,160,160)"
          },
          "Axis": {
            "color": "rgb(179,179,179)"
          }
        },
        "text": {
          "mathItalicization": true,
          "textTypes": {
            "Label": {
              "font-family": "\"Comic Sans MS\", sans-serif",
              "font-size": 20,
              "font-weight": "normal"
            },
            "Caption": {
              "font-family": "\"Comic Sans MS\", sans-serif",
              "font-size": 20,
              "font-weight": "bold",
              "text-decoration": "underline",
              "color": "fuchsia"
            },
            "Measurement": {
              "font-family": "\"Comic Sans MS\", sans-serif",
              "font-size": 16
            },
            "Action": {
              "label": {
                "font-family": "\"Comic Sans MS\", sans-serif",
                "font-size": 12
              }
            },
            "Table": {
              "font-family": "\"Comic Sans MS\", sans-serif",
              "font-size": 16
            },
            "AxisTicksAndOptionalLabel": {
              "font-family": "\"Comic Sans MS\", sans-serif",
              "font-size": 28
            }
          }
        },
        "limitScrolling": true
      },
      "objects": {
        "1": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 52,
              "y": 177
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "8",
          "label": "first integer",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true,
            "selectable": false
          }
        },
        "2": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 226,
              "y": 178
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "2",
          "label": "second integer",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true,
            "selectable": false
          }
        },
        "3": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "1",
            "1": "2"
          },
          "geom": {
            "loc": {
              "x": 1194,
              "y": 135
            }
          },
          "latentVisibility": true,
          "label": "New Integers",
          "style": {
            "hidden": true,
            "color": "rgb(255,128,0)",
            "label": {
              "font-size": 10
            },
            "selectable": false
          },
          "constraint": "ActionButtonAnimate",
          "messages": [
            "New Integers"
          ],
          "animationStates": [
            {
              "rate": 1,
              "timeInterval": 1,
              "repeat": false,
              "motionType": "random",
              "lowerParamBound": -10.5,
              "upperParamBound": 10.5,
              "discrete": false
            },
            {
              "rate": 1,
              "timeInterval": 1,
              "repeat": false,
              "motionType": "random",
              "lowerParamBound": -10,
              "upperParamBound": 10,
              "discrete": false
            }
          ]
        },
        "4": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "1"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 791,
              "y": 95
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "round(@0)",
          "latentVisibility": true,
          "label": "m[1]",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "5": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "2"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 966,
              "y": 93
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "round(@0)",
          "latentVisibility": true,
          "label": "m[2]",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "6": {
          "kind": "Expression",
          "genus": "DistanceParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1154,
              "y": 74
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "0.5 cm",
          "latentVisibility": true,
          "label": "rad tile",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true,
            "selectable": false
          }
        },
        "7": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "4"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 791,
              "y": 113
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1+sgn(-.5+sgn(@0)))/2",
          "latentVisibility": true,
          "label": "1st integer >0",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "8": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "5"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 966,
              "y": 111
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1+sgn(-.5+sgn(@0)))/2",
          "latentVisibility": true,
          "label": "2nd integer >0",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "9": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "7"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 791,
              "y": 130
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*255",
          "latentVisibility": true,
          "label": "1st int red",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "10": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {},
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 791,
              "y": 147
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "0*0",
          "latentVisibility": true,
          "label": "1st int green",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "11": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "7"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 791,
              "y": 164
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-@0)*255",
          "latentVisibility": true,
          "label": "1st int blue",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "12": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "8"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 966,
              "y": 129
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*255",
          "latentVisibility": true,
          "label": "2nd int red",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "13": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {},
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 966,
              "y": 146
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "0*0",
          "latentVisibility": true,
          "label": "2nd int green",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "14": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "8"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 966,
              "y": 163
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-@0)*255",
          "latentVisibility": true,
          "label": "2nd int blue",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "15": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "4"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 791,
              "y": 181
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-abs(sgn(@0))",
          "latentVisibility": true,
          "label": "m[1]=0",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "16": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "5"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 972,
              "y": 184
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-abs(sgn(@0))",
          "latentVisibility": true,
          "label": "m[2]=0",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "17": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "4"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 16,
              "y": 76
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0",
          "label": "1",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "noVisibleName",
            "selectable": false
          }
        },
        "18": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "5"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 16,
              "y": 128
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0",
          "label": "f",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "noVisibleName",
            "selectable": false
          }
        },
        "19": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "15",
            "1": "6"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 791,
              "y": 204
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-@0)*@1",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "20": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "16",
            "1": "6"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 972,
              "y": 207
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-@0)*@1",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "21": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "4"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 791,
              "y": 227
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(@0)",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "22": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "5"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 972,
              "y": 230
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(@0)",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "23": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "21"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 791,
              "y": 249
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0-1",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "24": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "22"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 972,
              "y": 252
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0-1",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "25": {
          "kind": "Expression",
          "genus": "DistanceParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 791,
              "y": 271
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1.2 cm",
          "latentVisibility": true,
          "label": "spacing",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true,
            "selectable": false
          }
        },
        "26": {
          "kind": "Expression",
          "genus": "DistanceParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 972,
              "y": 274
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1.2 cm",
          "latentVisibility": true,
          "label": "spacing",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true,
            "selectable": false
          }
        },
        "27": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 63,
              "y": 58
            }
          },
          "style": {
            "hidden": true
          }
        },
        "28": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 63,
              "y": 424
            }
          },
          "style": {
            "hidden": true
          }
        },
        "29": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "27",
            "p1": "28"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "30": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "29"
          },
          "value": 0.22950819672131148,
          "constraint": "PointOnPath",
          "label": "B",
          "style": {
            "hidden": true
          }
        },
        "31": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "30",
            "distance": "26"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "32": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "30",
            "radius": "20"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "33": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "circle": "32"
          },
          "constraint": "CircleInterior",
          "style": {
            "hidden": true,
            "color": "rgb(255,128,0)",
            "layerOrder": 6
          }
        },
        "34": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "source": "33",
            "blue": "14",
            "green": "13",
            "red": "12"
          },
          "colorRange": "ReflectToRange",
          "colorModel": "TrivariateRGB",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeTrivariate",
          "style": {
            "hidden": true,
            "color": "red",
            "layerOrder": 7
          }
        },
        "35": {
          "kind": "Map",
          "genus": "IterateMap",
          "parents": {
            "0": "32",
            "1": "33",
            "2": "34",
            "3": "31",
            "preimage0": "30",
            "map0image0": "31",
            "depth": "24"
          },
          "constraint": "IterateMapByParametricDepth",
          "rerandomizePointsOnPaths": false,
          "finalIterationOnly": false
        },
        "36": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "34",
            "map": "35"
          },
          "constraint": "IterateImage",
          "style": {
            "hidden": true,
            "opacity": 0.49999237060546875,
            "layerOrder": 12
          }
        },
        "37": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "32",
            "map": "35"
          },
          "constraint": "IterateImage",
          "style": {
            "hidden": true,
            "line-style": "solid",
            "width": 1
          }
        },
        "38": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "29"
          },
          "value": 0.08743169398907104,
          "constraint": "PointOnPath",
          "label": "A",
          "style": {
            "hidden": true
          }
        },
        "39": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "38",
            "distance": "25"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "40": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "38",
            "radius": "19"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "41": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "circle": "40"
          },
          "constraint": "CircleInterior",
          "style": {
            "hidden": true,
            "color": "black",
            "layerOrder": 8
          }
        },
        "42": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "source": "41",
            "blue": "11",
            "green": "10",
            "red": "9"
          },
          "colorRange": "ReflectToRange",
          "colorModel": "TrivariateRGB",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeTrivariate",
          "style": {
            "hidden": true,
            "color": "red",
            "layerOrder": 9
          }
        },
        "43": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 16,
              "y": 100
            }
          },
          "textMFS": "<T'+'>",
          "style": {
            "hidden": true,
            "font-size": 18,
            "font-weight": "normal",
            "text-decoration": "none",
            "color": "black",
            "selectable": false
          }
        },
        "44": {
          "kind": "Map",
          "genus": "IterateMap",
          "parents": {
            "0": "39",
            "1": "40",
            "2": "41",
            "3": "42",
            "preimage0": "38",
            "map0image0": "39",
            "depth": "23"
          },
          "constraint": "IterateMapByParametricDepth",
          "rerandomizePointsOnPaths": false,
          "finalIterationOnly": false
        },
        "45": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "40",
            "map": "44"
          },
          "constraint": "IterateImage",
          "style": {
            "hidden": true,
            "line-style": "solid",
            "width": 1
          }
        },
        "46": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "42",
            "map": "44"
          },
          "constraint": "IterateImage",
          "style": {
            "hidden": true,
            "opacity": 0.49999237060546875,
            "layerOrder": 13
          }
        },
        "47": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "7"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 791,
              "y": 295
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-@0",
          "latentVisibility": true,
          "label": "m[3]",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "48": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "8"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 972,
              "y": 298
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-@0",
          "latentVisibility": true,
          "label": "m[3]",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "49": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "7",
            "1": "8"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 792,
              "y": 356
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(sgn(@0*@1))",
          "latentVisibility": true,
          "label": "both +ve",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "50": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "47",
            "1": "48"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 792,
              "y": 373
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(sgn(@0*@1))",
          "latentVisibility": true,
          "label": "both -ve",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "51": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "49",
            "1": "50"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 792,
              "y": 390
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "sgn(abs(sgn(@0))+abs(sgn(@1)))",
          "latentVisibility": true,
          "label": "same sign",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "52": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "51"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 792,
              "y": 407
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-@0",
          "latentVisibility": true,
          "label": "m[5]",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "53": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "4"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 792,
              "y": 424
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(@0)",
          "latentVisibility": true,
          "label": "m[4]",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "54": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "5"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 792,
              "y": 445
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(@0)",
          "latentVisibility": true,
          "label": "m[4]",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "55": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "53",
            "1": "54"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 520,
              "y": 390
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(.5+sgn(@0-@1)))/2",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "56": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "55"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 520,
              "y": 390
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-@0",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "57": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "55",
            "1": "53",
            "2": "56",
            "3": "54"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 792,
              "y": 466
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*@1+@2*@3",
          "latentVisibility": true,
          "label": "min (m[4], m[4])",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "58": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "52",
            "1": "57"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 792,
              "y": 488
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*@1",
          "latentVisibility": true,
          "label": "# zeros",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "59": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "58",
            "1": "25"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 792,
              "y": 505
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*@1",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "60": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "25",
            "1": "6",
            "2": "19"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 792,
              "y": 546
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(@0-2*@1)/2+@2",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "61": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "38",
            "distance": "60"
          },
          "angle": 3.1415926535897865,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "62": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "30",
            "distance": "60"
          },
          "angle": 3.1415926535897865,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "63": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 792,
              "y": 323
            }
          },
          "textMFS": "<VL<T'determine # of zeros'><T'draw the yellow shade ot cover zeros'>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "font-weight": "normal",
            "text-decoration": "none",
            "color": "rgb(255,128,0)",
            "selectable": false
          }
        },
        "64": {
          "kind": "Expression",
          "genus": "DistanceParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 792,
              "y": 522
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "0.8 cm",
          "latentVisibility": true,
          "label": "vert shift",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 1,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true,
            "selectable": false
          }
        },
        "65": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "62",
            "distance": "64"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "66": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "65",
            "distance": "59"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "67": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "61",
            "distance": "64"
          },
          "angle": -1.5707963267949,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "68": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "67",
            "distance": "59"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "69": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "0": "68",
            "1": "66",
            "2": "65",
            "3": "67"
          },
          "constraint": "PolygonFromPoints",
          "style": {
            "hidden": true,
            "layerOrder": 14
          }
        },
        "70": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 791,
              "y": 24
            }
          },
          "textMFS": "<VL<T'generate first integer'><T'set up RGB colouring'><T'calculations for iteration'>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "font-weight": "normal",
            "text-decoration": "none",
            "color": "rgb(255,128,0)",
            "selectable": false
          }
        },
        "71": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 966,
              "y": 22
            }
          },
          "textMFS": "<VL<T'generate first integer'><T'set up RGB colouring'><T'calculations for iteration'>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "font-weight": "normal",
            "text-decoration": "none",
            "color": "rgb(255,128,0)",
            "selectable": false
          }
        },
        "72": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "4",
            "1": "5"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1008,
              "y": 334
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0+@1",
          "latentVisibility": true,
          "label": "m[6]",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "73": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "4",
            "1": "5",
            "2": "72"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 417,
              "y": 180
            }
          },
          "textMFS": "<H<?xC0001><T' + ('><?xC0002><T') = '><?xC0003>>",
          "style": {
            "hidden": true,
            "font-size": 16,
            "font-weight": "normal",
            "text-decoration": "none",
            "color": "black",
            "selectable": false
          }
        },
        "74": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 14,
              "y": -23
            }
          },
          "textMFS": "<T'Adding Two Integers - Vocabulary & Minds On '>",
          "style": {
            "color": "black",
            "selectable": false
          }
        },
        "75": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 15,
              "y": 19
            }
          },
          "textMFS": "<VL<T'addend + addend = sum'><T' '><S#12<H<S#14<T'from Latin '>><S#14S2<T'addendum'>><S#14<T' \\\"that which is to be added\\\"'>>>><T'  '><T'Why are the numbers operated on are given the same name in addition?'><0><0><T'How do you think adding integers will be similar to and different from'><T'adding whole numbers?'><T''><T' '><T'Do you think the sum of two numbers always be larger than either'><T'number?'><F112xxFFFFFFFFx20x0110x>>",
          "style": {
            "font-weight": "normal",
            "text-decoration": "none",
            "color": "green",
            "selectable": false
          }
        },
        "76": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "55",
            "1": "54",
            "2": "56",
            "3": "53"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 936,
              "y": 471
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*@1+@2*@3",
          "latentVisibility": true,
          "label": "max (m[4], m[4])",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "77": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "76",
            "1": "58"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 936,
              "y": 493
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0-@1",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "78": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "1",
            "1": "2",
            "2": "58",
            "3": "77"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 815,
              "y": 600
            }
          },
          "textMFS": "<VL<H<T'The sum of '><?1xC0001<H<T'8'>>><T' and '><?1xC0002<H<T'2'>>><T' will generate '><?1xC0003<H<T'0'>>><T' zero pairs leaving '><?1xC0004<H<T'8'>>><T' more '><SR1G1L100<T'blue '>><T'counters.'>>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "font-weight": "normal",
            "text-decoration": "none",
            "color": "black",
            "selectable": false
          }
        },
        "79": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "72"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1168,
              "y": 408
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1+sgn(-.5+sgn(@0)))/2",
          "latentVisibility": true,
          "label": "m[6]>0",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "80": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "72"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1168,
              "y": 431
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(.5+sgn(@0)))/2",
          "latentVisibility": true,
          "label": "m[6]<0",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "81": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "72"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1168,
              "y": 454
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-abs(sgn(@0))",
          "latentVisibility": true,
          "label": "m[6]=0",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "82": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "1",
            "1": "2",
            "2": "58",
            "3": "77"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 815,
              "y": 620
            }
          },
          "textMFS": "<VL<H<T'The sum of '><?1xC0001<H<T'8'>>><T' and '><?1xC0002<H<T'2'>>><T' will generate '><?1xC0003<H<T'0'>>><T' zero pairs leaving '><?1xC0004<H<T'8'>>><T' more '><SR100G1L1<T'red '>><T'counters.'>>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "font-weight": "normal",
            "text-decoration": "none",
            "color": "black",
            "selectable": false
          }
        },
        "83": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "1",
            "1": "2",
            "2": "58"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 815,
              "y": 640
            }
          },
          "textMFS": "<VL<H<T'The sum of '><?1xC0001<H<T'8'>>><T' and '><?1xC0002<H<T'2'>>><T' will generate '><?1xC0003<H<T'0'>>><T' zero pairs leaving no unpaired counters.'>>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "font-weight": "normal",
            "text-decoration": "none",
            "color": "black",
            "selectable": false
          }
        },
        "84": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "80"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 375,
              "y": 605
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1/@0*2",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "85": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 390,
              "y": 628
            }
          },
          "style": {
            "hidden": true
          }
        },
        "86": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "85"
          },
          "angle": -1.5707963267949,
          "distance": 14.173228346456693,
          "constraint": "TranslateFixDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "87": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "86",
            "center": "85",
            "measure": "84"
          },
          "constraint": "DilateMeasureFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "88": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "79"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 375,
              "y": 605
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1/@0*2",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "89": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "86",
            "center": "85",
            "measure": "88"
          },
          "constraint": "DilateMeasureFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "90": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "81"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 375,
              "y": 605
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1/@0*2",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "91": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "86",
            "center": "85",
            "measure": "90"
          },
          "constraint": "DilateMeasureFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "92": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "72"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1008,
              "y": 352
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(@0)",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "93": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "1",
            "1": "2",
            "2": "92"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 815,
              "y": 659
            }
          },
          "textMFS": "<VL<H<T'The sum of '><?xC0001><T' and '><?xC0002><T' does not generate zero pairs so there are a total of '><?xC0003><T' '><SR100G1L1<T'red '>><T'counters.'>>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "font-weight": "normal",
            "text-decoration": "none",
            "color": "black",
            "selectable": false
          }
        },
        "94": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "1",
            "1": "2",
            "2": "92"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 815,
              "y": 679
            }
          },
          "textMFS": "<VL<H<T'The sum of '><?1xC0001<H<T'8'>>><T' and '><?1xC0002<H<T'2'>>><T' does not generate zero pairs so there are a total of '><?1xC0003<H<T'10'>>><T' '><SR1G1L100<T'blue '>><T'counters.'>>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "font-weight": "normal",
            "text-decoration": "none",
            "color": "black",
            "selectable": false
          }
        },
        "95": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "49"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1131,
              "y": 526
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1/@0*2",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "96": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "50"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1131,
              "y": 526
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1/@0*2",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "97": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "49"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1019,
              "y": 394
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-@0",
          "latentVisibility": true,
          "label": "m[7]",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "98": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "50"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1019,
              "y": 411
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-@0",
          "latentVisibility": true,
          "label": "m[7]",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "99": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "97",
            "1": "79"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1128,
              "y": 497
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(sgn(@0*@1))",
          "latentVisibility": true,
          "label": "(m[7])^(m[6]>0)",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "100": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "98",
            "1": "80"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1128,
              "y": 519
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(sgn(@0*@1))",
          "latentVisibility": true,
          "label": "(m[7])^(m[6]<0)",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "101": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "99"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1146,
              "y": 538
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1/@0*2",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "102": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "100"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1146,
              "y": 538
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1/@0*2",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "103": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 24,
              "y": 64
            }
          },
          "style": {
            "hidden": true
          }
        },
        "104": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 663,
              "y": 64
            }
          },
          "style": {
            "hidden": true
          }
        },
        "105": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "103",
            "p1": "104"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "106": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1223,
              "y": 500
            }
          },
          "textMFS": "<VL<T'diff signs and greater than 0'>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "font-weight": "normal",
            "text-decoration": "none",
            "color": "rgb(255,128,0)",
            "selectable": false
          }
        },
        "107": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1223,
              "y": 519
            }
          },
          "textMFS": "<VL<T'diff signs and less than 0'>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "font-weight": "normal",
            "text-decoration": "none",
            "color": "rgb(255,128,0)",
            "selectable": false
          }
        },
        "108": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1226,
              "y": 405
            }
          },
          "textMFS": "<VL<T'sum +ve'>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "font-weight": "normal",
            "text-decoration": "none",
            "color": "rgb(255,128,0)",
            "selectable": false
          }
        },
        "109": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1220,
              "y": 428
            }
          },
          "textMFS": "<VL<T'sum -ve'>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "font-weight": "normal",
            "text-decoration": "none",
            "color": "rgb(255,128,0)",
            "selectable": false
          }
        },
        "110": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1228,
              "y": 453
            }
          },
          "textMFS": "<VL<T'sum 0'>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "font-weight": "normal",
            "text-decoration": "none",
            "color": "rgb(255,128,0)",
            "selectable": false
          }
        },
        "111": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "105"
          },
          "value": 0.41471048513302033,
          "constraint": "PointOnPath",
          "style": {
            "hidden": true
          }
        },
        "112": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "111"
          },
          "angle": -1.5707963267949,
          "distance": 14.173228346456693,
          "constraint": "TranslateFixDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "113": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "112",
            "center": "111",
            "measure": "102"
          },
          "constraint": "DilateMeasureFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "114": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "113",
            "text": "78"
          },
          "constraint": "Pegged",
          "style": {
            "font-size": 16,
            "font-weight": "normal",
            "text-decoration": "none",
            "color": "black",
            "selectable": false
          }
        },
        "115": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "105"
          },
          "value": 0.41784037558685444,
          "constraint": "PointOnPath",
          "style": {
            "hidden": true
          }
        },
        "116": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "115"
          },
          "angle": -1.5707963267949,
          "distance": 14.173228346456693,
          "constraint": "TranslateFixDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "117": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "116",
            "center": "115",
            "measure": "101"
          },
          "constraint": "DilateMeasureFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "118": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "117",
            "text": "82"
          },
          "constraint": "Pegged",
          "style": {
            "font-size": 16,
            "font-weight": "normal",
            "text-decoration": "none",
            "color": "black",
            "selectable": false
          }
        },
        "119": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "105"
          },
          "value": 0.4131455399061033,
          "constraint": "PointOnPath",
          "style": {
            "hidden": true
          }
        },
        "120": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "119"
          },
          "angle": -1.5707963267949,
          "distance": 14.173228346456693,
          "constraint": "TranslateFixDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "121": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "120",
            "center": "119",
            "measure": "90"
          },
          "constraint": "DilateMeasureFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "122": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "121",
            "text": "83"
          },
          "constraint": "Pegged",
          "style": {
            "font-size": 16,
            "font-weight": "normal",
            "text-decoration": "none",
            "color": "black",
            "selectable": false
          }
        },
        "123": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "105"
          },
          "value": 0.49139280125195617,
          "constraint": "PointOnPath",
          "style": {
            "hidden": true
          }
        },
        "124": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "123"
          },
          "angle": -1.5707963267949,
          "distance": 14.173228346456693,
          "constraint": "TranslateFixDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "125": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "124",
            "center": "123",
            "measure": "95"
          },
          "constraint": "DilateMeasureFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "126": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "125",
            "text": "93"
          },
          "constraint": "Pegged",
          "style": {
            "hidden": true,
            "font-size": 16,
            "font-weight": "normal",
            "text-decoration": "none",
            "color": "black",
            "selectable": false
          }
        },
        "127": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "105"
          },
          "value": 0.5070422535211268,
          "constraint": "PointOnPath",
          "style": {
            "hidden": true
          }
        },
        "128": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "127"
          },
          "angle": -1.5707963267949,
          "distance": 14.173228346456693,
          "constraint": "TranslateFixDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "129": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "128",
            "center": "127",
            "measure": "96"
          },
          "constraint": "DilateMeasureFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "130": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "129",
            "text": "94"
          },
          "constraint": "Pegged",
          "style": {
            "font-size": 16,
            "font-weight": "normal",
            "text-decoration": "none",
            "color": "black",
            "selectable": false
          }
        },
        "131": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "3",
            "1": "4",
            "2": "5",
            "3": "6",
            "4": "7",
            "5": "8",
            "6": "9",
            "7": "10",
            "8": "11",
            "9": "12",
            "10": "13",
            "11": "14",
            "12": "15",
            "13": "16",
            "14": "19",
            "15": "20",
            "16": "21",
            "17": "22",
            "18": "23",
            "19": "24",
            "20": "25",
            "21": "26",
            "22": "47",
            "23": "48",
            "24": "49",
            "25": "50",
            "26": "51",
            "27": "52",
            "28": "53",
            "29": "54",
            "30": "57",
            "31": "58",
            "32": "59",
            "33": "60",
            "34": "63",
            "35": "64",
            "36": "70",
            "37": "71",
            "38": "72",
            "39": "76",
            "40": "77",
            "41": "78",
            "42": "79",
            "43": "80",
            "44": "81",
            "45": "82",
            "46": "83",
            "47": "92",
            "48": "93",
            "49": "94",
            "50": "97",
            "51": "98",
            "52": "99",
            "53": "100",
            "54": "106",
            "55": "107",
            "56": "108",
            "57": "109",
            "58": "110"
          },
          "geom": {
            "loc": {
              "x": 1229,
              "y": 5
            }
          },
          "label": "Show Objects",
          "style": {
            "color": "rgb(255,128,0)",
            "label": {
              "font-size": 10
            },
            "selectable": false
          },
          "constraint": "ActionButtonToggleHideShow",
          "messages": [
            "Hide Objects",
            "Show Objects"
          ],
          "shouldAutogenerateLabel": true
        },
        "132": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 24,
              "y": 361
            }
          },
          "textMFS": "<SR100G1L100<VL<T'You increase the total number of tiles.'><0><0><T'Some of the tiles create zero pairs.'>>>",
          "style": {
            "hidden": true,
            "font-size": 16,
            "font-weight": "normal",
            "text-decoration": "none",
            "selectable": false
          }
        },
        "133": {
          "kind": "Button",
          "genus": "Action",
          "geom": {
            "loc": {
              "x": 742,
              "y": -10
            }
          },
          "label": "Next Page",
          "constraint": "ActionButtonLinkPage",
          "messages": [
            "Next Page"
          ],
          "pageId": "2",
          "style": {
            "selectable": false
          }
        }
      }
    },
    {
      "metadata": {
        "title": "2",
        "id": "2",
        "sketchRect": {
          "top": -32,
          "left": -3,
          "bottom": 659,
          "right": 1130
        }
      },
      "preferences": {
        "units": {
          "length": "cm",
          "angle": "deg"
        },
        "precision": {
          "length": 2,
          "angle": 2,
          "scalar": 2
        },
        "colorableComponents": {
          "Points": {
            "color": "rgb(0,0,252)"
          },
          "Straights": {
            "color": "rgb(0,126,0)"
          },
          "Curves": {
            "color": "black"
          },
          "Interior": {
            "color": "yellow"
          },
          "Plot": {
            "color": "rgb(0,125,0)"
          },
          "PointLocus": {
            "color": "rgb(121,0,0)"
          },
          "Selection": {
            "color": "rgb(188,0,188)"
          },
          "Background": {
            "color": "rgb(248,248,248)"
          },
          "ActionButton": {
            "color": "rgb(160,160,160)"
          },
          "Axis": {
            "color": "rgb(179,179,179)"
          }
        },
        "text": {
          "mathItalicization": true,
          "textTypes": {
            "Label": {
              "font-family": "\"Comic Sans MS\", sans-serif",
              "font-size": 20,
              "font-weight": "normal"
            },
            "Caption": {
              "font-family": "\"Comic Sans MS\", sans-serif",
              "font-size": 18,
              "font-weight": "bold",
              "text-decoration": "underline",
              "color": "fuchsia"
            },
            "Measurement": {
              "font-family": "\"Comic Sans MS\", sans-serif"
            },
            "Action": {
              "label": {
                "font-family": "\"Comic Sans MS\", sans-serif",
                "font-size": 12
              }
            },
            "Table": {
              "font-family": "\"Comic Sans MS\", sans-serif",
              "font-size": 16
            },
            "AxisTicksAndOptionalLabel": {
              "font-family": "\"Comic Sans MS\", sans-serif",
              "font-size": 28
            }
          }
        },
        "limitScrolling": true
      },
      "objects": {
        "1": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 38,
              "y": 184
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "5",
          "label": "first integer",
          "style": {
            "font-size": 16,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true,
            "selectable": false
          }
        },
        "2": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 206,
              "y": 186
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "2",
          "label": "second integer",
          "style": {
            "font-size": 16,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true,
            "selectable": false
          }
        },
        "3": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "1",
            "1": "2"
          },
          "geom": {
            "loc": {
              "x": 1194,
              "y": 135
            }
          },
          "latentVisibility": true,
          "label": "New Integers",
          "style": {
            "hidden": true,
            "color": "rgb(255,128,0)",
            "label": {
              "font-size": 10
            },
            "selectable": false
          },
          "constraint": "ActionButtonAnimate",
          "messages": [
            "New Integers"
          ],
          "animationStates": [
            {
              "rate": 1,
              "timeInterval": 1,
              "repeat": false,
              "motionType": "random",
              "lowerParamBound": -10.5,
              "upperParamBound": 10.5,
              "discrete": false
            },
            {
              "rate": 1,
              "timeInterval": 1,
              "repeat": false,
              "motionType": "random",
              "lowerParamBound": -10,
              "upperParamBound": 10,
              "discrete": false
            }
          ]
        },
        "4": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "1"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 791,
              "y": 95
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "round(@0)",
          "latentVisibility": true,
          "label": "m[1]",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "5": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "2"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 966,
              "y": 93
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "round(@0)",
          "latentVisibility": true,
          "label": "m[2]",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "6": {
          "kind": "Expression",
          "genus": "DistanceParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1154,
              "y": 74
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "0.8 cm",
          "latentVisibility": true,
          "label": "rad tile",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true,
            "selectable": false
          }
        },
        "7": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "4"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 791,
              "y": 113
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1+sgn(-.5+sgn(@0)))/2",
          "latentVisibility": true,
          "label": "1st integer >0",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "8": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "5"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 966,
              "y": 111
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1+sgn(-.5+sgn(@0)))/2",
          "latentVisibility": true,
          "label": "2nd integer >0",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "9": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "7"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 791,
              "y": 130
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*255",
          "latentVisibility": true,
          "label": "1st int red",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "10": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {},
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 791,
              "y": 147
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "0*0",
          "latentVisibility": true,
          "label": "1st int green",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "11": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "7"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 791,
              "y": 164
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-@0)*255",
          "latentVisibility": true,
          "label": "1st int blue",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "12": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "8"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 966,
              "y": 129
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*255",
          "latentVisibility": true,
          "label": "2nd int red",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "13": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {},
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 966,
              "y": 146
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "0*0",
          "latentVisibility": true,
          "label": "2nd int green",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "14": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "8"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 966,
              "y": 163
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-@0)*255",
          "latentVisibility": true,
          "label": "2nd int blue",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "15": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "4"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 791,
              "y": 181
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-abs(sgn(@0))",
          "latentVisibility": true,
          "label": "m[1]=0",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "16": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "5"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 972,
              "y": 184
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-abs(sgn(@0))",
          "latentVisibility": true,
          "label": "m[2]=0",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "17": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "4"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 16,
              "y": 76
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0",
          "label": "1",
          "style": {
            "precision": 0,
            "nameOrigin": "noVisibleName",
            "selectable": false
          }
        },
        "18": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "5"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 16,
              "y": 128
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0",
          "label": "f",
          "style": {
            "precision": 0,
            "nameOrigin": "noVisibleName",
            "selectable": false
          }
        },
        "19": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "15",
            "1": "6"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 791,
              "y": 204
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-@0)*@1",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "20": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "16",
            "1": "6"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 972,
              "y": 207
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-@0)*@1",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "21": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "4"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 791,
              "y": 227
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(@0)",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "22": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "5"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 972,
              "y": 230
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(@0)",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "23": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "21"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 791,
              "y": 249
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0-1",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "24": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "22"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 972,
              "y": 252
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0-1",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "25": {
          "kind": "Expression",
          "genus": "DistanceParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 791,
              "y": 271
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1.9 cm",
          "latentVisibility": true,
          "label": "spacing",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true,
            "selectable": false
          }
        },
        "26": {
          "kind": "Expression",
          "genus": "DistanceParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 972,
              "y": 274
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1.9 cm",
          "latentVisibility": true,
          "label": "spacing",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true,
            "selectable": false
          }
        },
        "27": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 63,
              "y": 58
            }
          },
          "style": {
            "hidden": true
          }
        },
        "28": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 63,
              "y": 424
            }
          },
          "style": {
            "hidden": true
          }
        },
        "29": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "27",
            "p1": "28"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "30": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "29"
          },
          "value": 0.22950819672131148,
          "constraint": "PointOnPath",
          "label": "B",
          "style": {
            "hidden": true
          }
        },
        "31": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "30",
            "distance": "26"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "32": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "30",
            "radius": "20"
          },
          "constraint": "CircleByRadius"
        },
        "33": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "circle": "32"
          },
          "constraint": "CircleInterior",
          "style": {
            "hidden": true,
            "color": "rgb(255,128,0)",
            "layerOrder": 6
          }
        },
        "34": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "source": "33",
            "blue": "14",
            "green": "13",
            "red": "12"
          },
          "colorRange": "ReflectToRange",
          "colorModel": "TrivariateRGB",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeTrivariate",
          "style": {
            "color": "red",
            "layerOrder": 7
          }
        },
        "35": {
          "kind": "Map",
          "genus": "IterateMap",
          "parents": {
            "0": "32",
            "1": "33",
            "2": "34",
            "3": "31",
            "preimage0": "30",
            "map0image0": "31",
            "depth": "24"
          },
          "constraint": "IterateMapByParametricDepth",
          "rerandomizePointsOnPaths": false,
          "finalIterationOnly": false
        },
        "36": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "34",
            "map": "35"
          },
          "constraint": "IterateImage",
          "style": {
            "opacity": 0.49999237060546875,
            "layerOrder": 12
          }
        },
        "37": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "32",
            "map": "35"
          },
          "constraint": "IterateImage",
          "style": {
            "line-style": "solid",
            "width": 3
          }
        },
        "38": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "29"
          },
          "value": 0.08743169398907104,
          "constraint": "PointOnPath",
          "label": "A",
          "style": {
            "hidden": true
          }
        },
        "39": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "38",
            "distance": "25"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "40": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "38",
            "radius": "19"
          },
          "constraint": "CircleByRadius"
        },
        "41": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "circle": "40"
          },
          "constraint": "CircleInterior",
          "style": {
            "hidden": true,
            "color": "black",
            "layerOrder": 8
          }
        },
        "42": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "source": "41",
            "blue": "11",
            "green": "10",
            "red": "9"
          },
          "colorRange": "ReflectToRange",
          "colorModel": "TrivariateRGB",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeTrivariate",
          "style": {
            "color": "red",
            "layerOrder": 9
          }
        },
        "43": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 16,
              "y": 100
            }
          },
          "textMFS": "<T'+'>",
          "style": {
            "font-weight": "normal",
            "text-decoration": "none",
            "color": "black",
            "selectable": false
          }
        },
        "44": {
          "kind": "Map",
          "genus": "IterateMap",
          "parents": {
            "0": "39",
            "1": "40",
            "2": "41",
            "3": "42",
            "preimage0": "38",
            "map0image0": "39",
            "depth": "23"
          },
          "constraint": "IterateMapByParametricDepth",
          "rerandomizePointsOnPaths": false,
          "finalIterationOnly": false
        },
        "45": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "40",
            "map": "44"
          },
          "constraint": "IterateImage",
          "style": {
            "line-style": "solid",
            "width": 3
          }
        },
        "46": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "42",
            "map": "44"
          },
          "constraint": "IterateImage",
          "style": {
            "opacity": 0.49999237060546875,
            "layerOrder": 13
          }
        },
        "47": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "7"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 791,
              "y": 295
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-@0",
          "latentVisibility": true,
          "label": "m[3]",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "48": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "8"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 972,
              "y": 298
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-@0",
          "latentVisibility": true,
          "label": "m[3]",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "49": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "7",
            "1": "8"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 792,
              "y": 356
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(sgn(@0*@1))",
          "latentVisibility": true,
          "label": "both +ve",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "50": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "47",
            "1": "48"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 792,
              "y": 373
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(sgn(@0*@1))",
          "latentVisibility": true,
          "label": "both -ve",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "51": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "49",
            "1": "50"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 792,
              "y": 390
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "sgn(abs(sgn(@0))+abs(sgn(@1)))",
          "latentVisibility": true,
          "label": "same sign",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "52": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "51"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 792,
              "y": 407
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-@0",
          "latentVisibility": true,
          "label": "m[5]",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "53": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "4"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 792,
              "y": 424
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(@0)",
          "latentVisibility": true,
          "label": "m[4]",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "54": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "5"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 792,
              "y": 445
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(@0)",
          "latentVisibility": true,
          "label": "m[4]",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "55": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "53",
            "1": "54"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 520,
              "y": 390
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(.5+sgn(@0-@1)))/2",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "56": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "55"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 520,
              "y": 390
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-@0",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "57": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "55",
            "1": "53",
            "2": "56",
            "3": "54"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 792,
              "y": 466
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*@1+@2*@3",
          "latentVisibility": true,
          "label": "min (m[4], m[4])",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "58": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "52",
            "1": "57"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 792,
              "y": 488
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*@1",
          "latentVisibility": true,
          "label": "# zeros",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "59": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "58",
            "1": "25"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 792,
              "y": 505
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*@1",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "60": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "25",
            "1": "6",
            "2": "19"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 792,
              "y": 546
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(@0-2*@1)/2+@2",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "61": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "38",
            "distance": "60"
          },
          "angle": 3.1415926535897865,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "62": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "30",
            "distance": "60"
          },
          "angle": 3.1415926535897865,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "63": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 792,
              "y": 323
            }
          },
          "textMFS": "<VL<T'determine # of zeros'><T'draw the yellow shade ot cover zeros'>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "font-weight": "normal",
            "text-decoration": "none",
            "color": "rgb(255,128,0)",
            "selectable": false
          }
        },
        "64": {
          "kind": "Expression",
          "genus": "DistanceParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 792,
              "y": 522
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "0.8 cm",
          "latentVisibility": true,
          "label": "vert shift",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 1,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true,
            "selectable": false
          }
        },
        "65": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "62",
            "distance": "64"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "66": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "65",
            "distance": "59"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "67": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "61",
            "distance": "64"
          },
          "angle": -1.5707963267949,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "68": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "67",
            "distance": "59"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "69": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "0": "68",
            "1": "66",
            "2": "65",
            "3": "67"
          },
          "constraint": "PolygonFromPoints",
          "style": {
            "layerOrder": 14
          }
        },
        "70": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 791,
              "y": 24
            }
          },
          "textMFS": "<VL<T'generate first integer'><T'set up RGB colouring'><T'calculations for iteration'>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "font-weight": "normal",
            "text-decoration": "none",
            "color": "rgb(255,128,0)",
            "selectable": false
          }
        },
        "71": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 966,
              "y": 22
            }
          },
          "textMFS": "<VL<T'generate first integer'><T'set up RGB colouring'><T'calculations for iteration'>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "font-weight": "normal",
            "text-decoration": "none",
            "color": "rgb(255,128,0)",
            "selectable": false
          }
        },
        "72": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "4",
            "1": "5"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1008,
              "y": 334
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0+@1",
          "latentVisibility": true,
          "label": "m[6]",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "73": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "4",
            "1": "5",
            "2": "72"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 392,
              "y": 186
            }
          },
          "textMFS": "<H<?1xC0001<H<T'5'>>><T' + ('><?1xC0002<H<T'2'>>><T') = '><?1xC0003<H<T'7'>>>>",
          "style": {
            "font-weight": "normal",
            "text-decoration": "none",
            "color": "black",
            "selectable": false
          }
        },
        "74": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 8,
              "y": -20
            }
          },
          "textMFS": "<T'Adding Two Integers Investigation - Same and Different Signs'>",
          "style": {
            "font-size": 20,
            "color": "black",
            "selectable": false
          }
        },
        "75": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 20,
              "y": 238
            }
          },
          "textMFS": "<VL<SR1G1L1<T'Let\\'s explore what happens when you add two integers using counters. '>><0><SR1G1L1<T'Enter integers into both boxes above.'>><0><T'What happens when the integers have the same sign?'><0><0><T'What happens when the integers have different signs?'>>",
          "style": {
            "font-weight": "normal",
            "text-decoration": "none",
            "color": "green",
            "selectable": false
          }
        },
        "76": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "55",
            "1": "54",
            "2": "56",
            "3": "53"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 936,
              "y": 471
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*@1+@2*@3",
          "latentVisibility": true,
          "label": "max (m[4], m[4])",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "77": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "76",
            "1": "58"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 936,
              "y": 493
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0-@1",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "78": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "1",
            "1": "2",
            "2": "58",
            "3": "77"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 815,
              "y": 600
            }
          },
          "textMFS": "<VL<H<T'The sum of '><?1xC0001<H<T'5'>>><T' and '><?1xC0002<H<T'2'>>><T' will generate '><?1xC0003<H<T'0'>>><T' zero pairs leaving '><?1xC0004<H<T'5'>>><T' more '><SR1G1L100<T'blue '>><T'counters.'>>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "font-weight": "normal",
            "text-decoration": "none",
            "color": "black",
            "selectable": false
          }
        },
        "79": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "72"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1168,
              "y": 408
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1+sgn(-.5+sgn(@0)))/2",
          "latentVisibility": true,
          "label": "m[6]>0",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "80": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "72"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1168,
              "y": 431
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(.5+sgn(@0)))/2",
          "latentVisibility": true,
          "label": "m[6]<0",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "81": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "72"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1168,
              "y": 454
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-abs(sgn(@0))",
          "latentVisibility": true,
          "label": "m[6]=0",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "82": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "1",
            "1": "2",
            "2": "58",
            "3": "77"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 815,
              "y": 620
            }
          },
          "textMFS": "<VL<H<T'The sum of '><?1xC0001<H<T'5'>>><T' and '><?1xC0002<H<T'2'>>><T' will generate '><?1xC0003<H<T'0'>>><T' zero pairs leaving '><?1xC0004<H<T'5'>>><T' more '><SR100G1L1<T'red '>><T'counters.'>>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "font-weight": "normal",
            "text-decoration": "none",
            "color": "black",
            "selectable": false
          }
        },
        "83": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "1",
            "1": "2",
            "2": "58"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 815,
              "y": 640
            }
          },
          "textMFS": "<VL<H<T'The sum of '><?1xC0001<H<T'5'>>><T' and '><?1xC0002<H<T'2'>>><T' will generate '><?1xC0003<H<T'0'>>><T' zero pairs leaving no unpaired counters.'>>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "font-weight": "normal",
            "text-decoration": "none",
            "color": "black",
            "selectable": false
          }
        },
        "84": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "80"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 375,
              "y": 605
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1/@0*2",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "85": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 390,
              "y": 628
            }
          },
          "style": {
            "hidden": true
          }
        },
        "86": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "85"
          },
          "angle": -1.5707963267949,
          "distance": 14.173228346456693,
          "constraint": "TranslateFixDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "87": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "86",
            "center": "85",
            "measure": "84"
          },
          "constraint": "DilateMeasureFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "88": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "79"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 375,
              "y": 605
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1/@0*2",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "89": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "86",
            "center": "85",
            "measure": "88"
          },
          "constraint": "DilateMeasureFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "90": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "81"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 375,
              "y": 605
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1/@0*2",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "91": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "86",
            "center": "85",
            "measure": "90"
          },
          "constraint": "DilateMeasureFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "92": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "72"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1008,
              "y": 352
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(@0)",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "93": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "1",
            "1": "2",
            "2": "92"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 815,
              "y": 659
            }
          },
          "textMFS": "<VL<H<T'The sum of '><?1xC0001<H<T'5'>>><T' and '><?1xC0002<H<T'2'>>><T' does not generate zero pairs so there are a total of '><?1xC0003<H<T'7'>>><T' '><SR100G1L1<T'red '>><T'counters.'>>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "font-weight": "normal",
            "text-decoration": "none",
            "color": "black",
            "selectable": false
          }
        },
        "94": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "1",
            "1": "2",
            "2": "92"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 815,
              "y": 679
            }
          },
          "textMFS": "<VL<H<T'The sum of '><?1xC0001<H<T'5'>>><T' and '><?1xC0002<H<T'2'>>><T' does not generate zero pairs so there are a total of '><?1xC0003<H<T'7'>>><T' '><SR1G1L100<T'blue '>><T'counters.'>>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "font-weight": "normal",
            "text-decoration": "none",
            "color": "black",
            "selectable": false
          }
        },
        "95": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "49"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1131,
              "y": 526
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1/@0*2",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "96": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "50"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1131,
              "y": 526
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1/@0*2",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "97": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "49"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1019,
              "y": 394
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-@0",
          "latentVisibility": true,
          "label": "m[7]",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "98": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "50"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1019,
              "y": 411
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-@0",
          "latentVisibility": true,
          "label": "m[7]",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "99": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "97",
            "1": "79"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1128,
              "y": 497
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(sgn(@0*@1))",
          "latentVisibility": true,
          "label": "(m[7])^(m[6]>0)",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "100": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "98",
            "1": "80"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1128,
              "y": 519
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(sgn(@0*@1))",
          "latentVisibility": true,
          "label": "(m[7])^(m[6]<0)",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "101": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "99"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1146,
              "y": 538
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1/@0*2",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "102": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "100"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1146,
              "y": 538
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1/@0*2",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "103": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 24,
              "y": 64
            }
          },
          "style": {
            "hidden": true
          }
        },
        "104": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 663,
              "y": 64
            }
          },
          "style": {
            "hidden": true
          }
        },
        "105": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "103",
            "p1": "104"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "106": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1223,
              "y": 500
            }
          },
          "textMFS": "<VL<T'diff signs and greater than 0'>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "font-weight": "normal",
            "text-decoration": "none",
            "color": "rgb(255,128,0)",
            "selectable": false
          }
        },
        "107": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1223,
              "y": 519
            }
          },
          "textMFS": "<VL<T'diff signs and less than 0'>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "font-weight": "normal",
            "text-decoration": "none",
            "color": "rgb(255,128,0)",
            "selectable": false
          }
        },
        "108": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1226,
              "y": 405
            }
          },
          "textMFS": "<VL<T'sum +ve'>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "font-weight": "normal",
            "text-decoration": "none",
            "color": "rgb(255,128,0)",
            "selectable": false
          }
        },
        "109": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1220,
              "y": 428
            }
          },
          "textMFS": "<VL<T'sum -ve'>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "font-weight": "normal",
            "text-decoration": "none",
            "color": "rgb(255,128,0)",
            "selectable": false
          }
        },
        "110": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1228,
              "y": 453
            }
          },
          "textMFS": "<VL<T'sum 0'>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "font-weight": "normal",
            "text-decoration": "none",
            "color": "rgb(255,128,0)",
            "selectable": false
          }
        },
        "111": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "105"
          },
          "value": 0.41471048513302033,
          "constraint": "PointOnPath",
          "style": {
            "hidden": true
          }
        },
        "112": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "111"
          },
          "angle": -1.5707963267949,
          "distance": 14.173228346456693,
          "constraint": "TranslateFixDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "113": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "112",
            "center": "111",
            "measure": "102"
          },
          "constraint": "DilateMeasureFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "114": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "113",
            "text": "78"
          },
          "constraint": "Pegged",
          "style": {
            "font-size": 16,
            "font-weight": "normal",
            "text-decoration": "none",
            "color": "black",
            "selectable": false
          }
        },
        "115": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "105"
          },
          "value": 0.41784037558685444,
          "constraint": "PointOnPath",
          "style": {
            "hidden": true
          }
        },
        "116": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "115"
          },
          "angle": -1.5707963267949,
          "distance": 14.173228346456693,
          "constraint": "TranslateFixDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "117": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "116",
            "center": "115",
            "measure": "101"
          },
          "constraint": "DilateMeasureFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "118": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "117",
            "text": "82"
          },
          "constraint": "Pegged",
          "style": {
            "font-size": 16,
            "font-weight": "normal",
            "text-decoration": "none",
            "color": "black",
            "selectable": false
          }
        },
        "119": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "105"
          },
          "value": 0.4131455399061033,
          "constraint": "PointOnPath",
          "style": {
            "hidden": true
          }
        },
        "120": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "119"
          },
          "angle": -1.5707963267949,
          "distance": 14.173228346456693,
          "constraint": "TranslateFixDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "121": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "120",
            "center": "119",
            "measure": "90"
          },
          "constraint": "DilateMeasureFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "122": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "121",
            "text": "83"
          },
          "constraint": "Pegged",
          "style": {
            "font-size": 16,
            "font-weight": "normal",
            "text-decoration": "none",
            "color": "black",
            "selectable": false
          }
        },
        "123": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "105"
          },
          "value": 0.5571205007824727,
          "constraint": "PointOnPath",
          "style": {
            "hidden": true
          }
        },
        "124": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "123"
          },
          "angle": -1.5707963267949,
          "distance": 14.173228346456693,
          "constraint": "TranslateFixDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "125": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "124",
            "center": "123",
            "measure": "95"
          },
          "constraint": "DilateMeasureFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "126": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "125",
            "text": "93"
          },
          "constraint": "Pegged",
          "style": {
            "font-weight": "normal",
            "text-decoration": "none",
            "color": "black",
            "selectable": false
          }
        },
        "127": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "105"
          },
          "value": 0.5070422535211268,
          "constraint": "PointOnPath",
          "style": {
            "hidden": true
          }
        },
        "128": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "127"
          },
          "angle": -1.5707963267949,
          "distance": 14.173228346456693,
          "constraint": "TranslateFixDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "129": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "128",
            "center": "127",
            "measure": "96"
          },
          "constraint": "DilateMeasureFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "130": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "129",
            "text": "94"
          },
          "constraint": "Pegged",
          "style": {
            "font-size": 16,
            "font-weight": "normal",
            "text-decoration": "none",
            "color": "black",
            "selectable": false
          }
        },
        "131": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "3",
            "1": "4",
            "2": "5",
            "3": "6",
            "4": "7",
            "5": "8",
            "6": "9",
            "7": "10",
            "8": "11",
            "9": "12",
            "10": "13",
            "11": "14",
            "12": "15",
            "13": "16",
            "14": "19",
            "15": "20",
            "16": "21",
            "17": "22",
            "18": "23",
            "19": "24",
            "20": "25",
            "21": "26",
            "22": "47",
            "23": "48",
            "24": "49",
            "25": "50",
            "26": "51",
            "27": "52",
            "28": "53",
            "29": "54",
            "30": "57",
            "31": "58",
            "32": "59",
            "33": "60",
            "34": "63",
            "35": "64",
            "36": "70",
            "37": "71",
            "38": "72",
            "39": "76",
            "40": "77",
            "41": "78",
            "42": "79",
            "43": "80",
            "44": "81",
            "45": "82",
            "46": "83",
            "47": "92",
            "48": "93",
            "49": "94",
            "50": "97",
            "51": "98",
            "52": "99",
            "53": "100",
            "54": "106",
            "55": "107",
            "56": "108",
            "57": "109",
            "58": "110"
          },
          "geom": {
            "loc": {
              "x": 1229,
              "y": 5
            }
          },
          "label": "Show Objects",
          "style": {
            "color": "rgb(255,128,0)",
            "label": {
              "font-size": 10
            },
            "selectable": false
          },
          "constraint": "ActionButtonToggleHideShow",
          "messages": [
            "Hide Objects",
            "Show Objects"
          ],
          "shouldAutogenerateLabel": true
        },
        "132": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 22,
              "y": 370
            }
          },
          "textMFS": "<VL<T'You increase the total number of tiles.'><0><0><T'Some of the tiles create zero pairs.'>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-weight": "normal",
            "text-decoration": "none",
            "selectable": false
          }
        },
        "133": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "132"
          },
          "geom": {
            "loc": {
              "x": 494,
              "y": 345
            }
          },
          "label": "Show Answer",
          "constraint": "ActionButtonToggleHideShow",
          "messages": [
            "Hide Answer",
            "Show Answer"
          ],
          "style": {
            "selectable": false
          }
        },
        "134": {
          "kind": "Button",
          "genus": "Action",
          "geom": {
            "loc": {
              "x": 759,
              "y": -11
            }
          },
          "label": "Next Page",
          "constraint": "ActionButtonLinkPage",
          "messages": [
            "Next Page"
          ],
          "pageId": "3",
          "style": {
            "selectable": false
          }
        },
        "135": {
          "kind": "Button",
          "genus": "Action",
          "geom": {
            "loc": {
              "x": 656,
              "y": -11
            }
          },
          "label": "Previous Page",
          "constraint": "ActionButtonLinkPage",
          "messages": [
            "Previous Page"
          ],
          "pageId": "1",
          "style": {
            "selectable": false
          }
        }
      }
    },
    {
      "metadata": {
        "title": "3",
        "id": "3",
        "sketchRect": {
          "top": -28,
          "left": -5,
          "bottom": 663,
          "right": 1128
        }
      },
      "preferences": {
        "units": {
          "length": "cm",
          "angle": "deg"
        },
        "precision": {
          "length": 2,
          "angle": 2,
          "scalar": 2
        },
        "colorableComponents": {
          "Points": {
            "color": "rgb(0,0,252)"
          },
          "Straights": {
            "color": "rgb(0,126,0)"
          },
          "Curves": {
            "color": "black"
          },
          "Interior": {
            "color": "yellow"
          },
          "Plot": {
            "color": "rgb(0,125,0)"
          },
          "PointLocus": {
            "color": "rgb(121,0,0)"
          },
          "Selection": {
            "color": "rgb(188,0,188)"
          },
          "Background": {
            "color": "rgb(248,248,248)"
          },
          "ActionButton": {
            "color": "rgb(255,128,0)"
          },
          "Axis": {
            "color": "rgb(179,179,179)"
          }
        },
        "text": {
          "mathItalicization": true,
          "textTypes": {
            "Label": {
              "font-family": "\"Comic Sans MS\", sans-serif",
              "font-size": 20,
              "font-weight": "normal"
            },
            "Caption": {
              "font-family": "\"Comic Sans MS\", sans-serif",
              "font-size": 18,
              "font-weight": "bold",
              "text-decoration": "underline"
            },
            "Measurement": {
              "font-family": "\"Comic Sans MS\", sans-serif"
            },
            "Action": {
              "label": {
                "font-family": "\"Comic Sans MS\", sans-serif",
                "font-size": 12
              }
            },
            "Table": {
              "font-family": "\"Comic Sans MS\", sans-serif",
              "font-size": 16
            },
            "AxisTicksAndOptionalLabel": {
              "font-family": "\"Comic Sans MS\", sans-serif",
              "font-size": 28
            }
          }
        },
        "limitScrolling": true
      },
      "objects": {
        "1": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 52,
              "y": 177
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "3",
          "label": "first integer",
          "style": {
            "font-size": 16,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true,
            "selectable": false
          }
        },
        "2": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 247,
              "y": 177
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "7",
          "label": "second integer",
          "style": {
            "font-size": 16,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true,
            "selectable": false
          }
        },
        "3": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "1",
            "1": "2"
          },
          "geom": {
            "loc": {
              "x": 1194,
              "y": 135
            }
          },
          "latentVisibility": true,
          "label": "New Integers",
          "style": {
            "hidden": true,
            "label": {
              "font-size": 10
            },
            "selectable": false
          },
          "constraint": "ActionButtonAnimate",
          "messages": [
            "New Integers"
          ],
          "animationStates": [
            {
              "rate": 1,
              "timeInterval": 1,
              "repeat": false,
              "motionType": "random",
              "lowerParamBound": -10.5,
              "upperParamBound": 10.5,
              "discrete": false
            },
            {
              "rate": 1,
              "timeInterval": 1,
              "repeat": false,
              "motionType": "random",
              "lowerParamBound": -10,
              "upperParamBound": 10,
              "discrete": false
            }
          ]
        },
        "4": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "1"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 791,
              "y": 95
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "round(@0)",
          "latentVisibility": true,
          "label": "m[1]",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "5": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "2"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 966,
              "y": 93
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "round(@0)",
          "latentVisibility": true,
          "label": "m[2]",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "6": {
          "kind": "Expression",
          "genus": "DistanceParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1154,
              "y": 74
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "0.8 cm",
          "latentVisibility": true,
          "label": "rad tile",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true,
            "selectable": false
          }
        },
        "7": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "4"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 791,
              "y": 113
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1+sgn(-.5+sgn(@0)))/2",
          "latentVisibility": true,
          "label": "1st integer >0",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "8": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "5"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 966,
              "y": 111
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1+sgn(-.5+sgn(@0)))/2",
          "latentVisibility": true,
          "label": "2nd integer >0",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "9": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "7"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 791,
              "y": 130
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*255",
          "latentVisibility": true,
          "label": "1st int red",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "10": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {},
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 791,
              "y": 147
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "0*0",
          "latentVisibility": true,
          "label": "1st int green",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "11": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "7"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 791,
              "y": 164
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-@0)*255",
          "latentVisibility": true,
          "label": "1st int blue",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "12": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "8"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 966,
              "y": 129
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*255",
          "latentVisibility": true,
          "label": "2nd int red",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "13": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {},
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 966,
              "y": 146
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "0*0",
          "latentVisibility": true,
          "label": "2nd int green",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "14": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "8"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 966,
              "y": 163
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-@0)*255",
          "latentVisibility": true,
          "label": "2nd int blue",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "15": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "4"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 791,
              "y": 181
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-abs(sgn(@0))",
          "latentVisibility": true,
          "label": "m[1]=0",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "16": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "5"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 972,
              "y": 184
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-abs(sgn(@0))",
          "latentVisibility": true,
          "label": "m[2]=0",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "17": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "4"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 13,
              "y": 76
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0",
          "label": "1",
          "style": {
            "precision": 0,
            "nameOrigin": "noVisibleName",
            "selectable": false
          }
        },
        "18": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "5"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 13,
              "y": 128
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0",
          "label": "f",
          "style": {
            "precision": 0,
            "nameOrigin": "noVisibleName",
            "selectable": false
          }
        },
        "19": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "15",
            "1": "6"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 791,
              "y": 204
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-@0)*@1",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "20": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "16",
            "1": "6"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 972,
              "y": 207
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-@0)*@1",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "21": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "4"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 791,
              "y": 227
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(@0)",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "22": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "5"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 972,
              "y": 230
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(@0)",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "23": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "21"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 791,
              "y": 249
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0-1",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "24": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "22"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 972,
              "y": 252
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0-1",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "25": {
          "kind": "Expression",
          "genus": "DistanceParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 791,
              "y": 271
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1.9 cm",
          "latentVisibility": true,
          "label": "spacing",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true,
            "selectable": false
          }
        },
        "26": {
          "kind": "Expression",
          "genus": "DistanceParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 972,
              "y": 274
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1.9 cm",
          "latentVisibility": true,
          "label": "spacing",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true,
            "selectable": false
          }
        },
        "27": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 63,
              "y": 58
            }
          },
          "style": {
            "hidden": true
          }
        },
        "28": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 63,
              "y": 424
            }
          },
          "style": {
            "hidden": true
          }
        },
        "29": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "27",
            "p1": "28"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "30": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "29"
          },
          "value": 0.22950819672131148,
          "constraint": "PointOnPath",
          "label": "B",
          "style": {
            "hidden": true
          }
        },
        "31": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "30",
            "distance": "26"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "32": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "30",
            "radius": "20"
          },
          "constraint": "CircleByRadius"
        },
        "33": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "circle": "32"
          },
          "constraint": "CircleInterior",
          "style": {
            "hidden": true,
            "color": "rgb(255,128,0)",
            "layerOrder": 6
          }
        },
        "34": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "source": "33",
            "blue": "14",
            "green": "13",
            "red": "12"
          },
          "colorRange": "ReflectToRange",
          "colorModel": "TrivariateRGB",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeTrivariate",
          "style": {
            "color": "red",
            "layerOrder": 7
          }
        },
        "35": {
          "kind": "Map",
          "genus": "IterateMap",
          "parents": {
            "0": "32",
            "1": "33",
            "2": "34",
            "3": "31",
            "preimage0": "30",
            "map0image0": "31",
            "depth": "24"
          },
          "constraint": "IterateMapByParametricDepth",
          "rerandomizePointsOnPaths": false,
          "finalIterationOnly": false
        },
        "36": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "34",
            "map": "35"
          },
          "constraint": "IterateImage",
          "style": {
            "opacity": 0.49999237060546875,
            "layerOrder": 12
          }
        },
        "37": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "32",
            "map": "35"
          },
          "constraint": "IterateImage",
          "style": {
            "line-style": "solid",
            "width": 3
          }
        },
        "38": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "29"
          },
          "value": 0.08743169398907104,
          "constraint": "PointOnPath",
          "label": "A",
          "style": {
            "hidden": true
          }
        },
        "39": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "38",
            "distance": "25"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "40": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "38",
            "radius": "19"
          },
          "constraint": "CircleByRadius"
        },
        "41": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "circle": "40"
          },
          "constraint": "CircleInterior",
          "style": {
            "hidden": true,
            "color": "black",
            "layerOrder": 8
          }
        },
        "42": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "source": "41",
            "blue": "11",
            "green": "10",
            "red": "9"
          },
          "colorRange": "ReflectToRange",
          "colorModel": "TrivariateRGB",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeTrivariate",
          "style": {
            "color": "red",
            "layerOrder": 9
          }
        },
        "43": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 13,
              "y": 100
            }
          },
          "textMFS": "<T'+'>",
          "style": {
            "font-weight": "normal",
            "text-decoration": "none",
            "selectable": false
          }
        },
        "44": {
          "kind": "Map",
          "genus": "IterateMap",
          "parents": {
            "0": "39",
            "1": "40",
            "2": "41",
            "3": "42",
            "preimage0": "38",
            "map0image0": "39",
            "depth": "23"
          },
          "constraint": "IterateMapByParametricDepth",
          "rerandomizePointsOnPaths": false,
          "finalIterationOnly": false
        },
        "45": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "40",
            "map": "44"
          },
          "constraint": "IterateImage",
          "style": {
            "line-style": "solid",
            "width": 3
          }
        },
        "46": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "42",
            "map": "44"
          },
          "constraint": "IterateImage",
          "style": {
            "opacity": 0.49999237060546875,
            "layerOrder": 13
          }
        },
        "47": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "7"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 791,
              "y": 295
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-@0",
          "latentVisibility": true,
          "label": "m[3]",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "48": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "8"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 972,
              "y": 298
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-@0",
          "latentVisibility": true,
          "label": "m[3]",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "49": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "7",
            "1": "8"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 792,
              "y": 356
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(sgn(@0*@1))",
          "latentVisibility": true,
          "label": "both +ve",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "50": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "47",
            "1": "48"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 792,
              "y": 373
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(sgn(@0*@1))",
          "latentVisibility": true,
          "label": "both -ve",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "51": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "49",
            "1": "50"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 792,
              "y": 390
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "sgn(abs(sgn(@0))+abs(sgn(@1)))",
          "latentVisibility": true,
          "label": "same sign",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "52": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "51"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 792,
              "y": 407
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-@0",
          "latentVisibility": true,
          "label": "m[5]",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "53": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "4"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 792,
              "y": 424
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(@0)",
          "latentVisibility": true,
          "label": "m[4]",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "54": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "5"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 792,
              "y": 445
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(@0)",
          "latentVisibility": true,
          "label": "m[4]",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "55": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "53",
            "1": "54"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 520,
              "y": 390
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(.5+sgn(@0-@1)))/2",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "56": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "55"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 520,
              "y": 390
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-@0",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "57": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "55",
            "1": "53",
            "2": "56",
            "3": "54"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 792,
              "y": 466
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*@1+@2*@3",
          "latentVisibility": true,
          "label": "min (m[4], m[4])",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "58": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "52",
            "1": "57"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 792,
              "y": 488
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*@1",
          "latentVisibility": true,
          "label": "# zeros",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "59": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "58",
            "1": "25"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 792,
              "y": 505
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*@1",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "60": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "25",
            "1": "6",
            "2": "19"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 792,
              "y": 546
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(@0-2*@1)/2+@2",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "61": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "38",
            "distance": "60"
          },
          "angle": 3.1415926535897865,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "62": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "30",
            "distance": "60"
          },
          "angle": 3.1415926535897865,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "63": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 792,
              "y": 323
            }
          },
          "textMFS": "<VL<T'determine # of zeros'><T'draw the yellow shade ot cover zeros'>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "font-weight": "normal",
            "text-decoration": "none",
            "color": "rgb(255,128,0)",
            "selectable": false
          }
        },
        "64": {
          "kind": "Expression",
          "genus": "DistanceParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 792,
              "y": 522
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "0.8 cm",
          "latentVisibility": true,
          "label": "vert shift",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 1,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true,
            "selectable": false
          }
        },
        "65": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "62",
            "distance": "64"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "66": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "65",
            "distance": "59"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "67": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "61",
            "distance": "64"
          },
          "angle": -1.5707963267949,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "68": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "67",
            "distance": "59"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "69": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "0": "68",
            "1": "66",
            "2": "65",
            "3": "67"
          },
          "constraint": "PolygonFromPoints",
          "style": {
            "layerOrder": 14
          }
        },
        "70": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 791,
              "y": 24
            }
          },
          "textMFS": "<VL<T'generate first integer'><T'set up RGB colouring'><T'calculations for iteration'>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "font-weight": "normal",
            "text-decoration": "none",
            "color": "rgb(255,128,0)",
            "selectable": false
          }
        },
        "71": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 966,
              "y": 22
            }
          },
          "textMFS": "<VL<T'generate first integer'><T'set up RGB colouring'><T'calculations for iteration'>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "font-weight": "normal",
            "text-decoration": "none",
            "color": "rgb(255,128,0)",
            "selectable": false
          }
        },
        "72": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "4",
            "1": "5"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1008,
              "y": 334
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0+@1",
          "latentVisibility": true,
          "label": "m[6]",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "73": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "4",
            "1": "5",
            "2": "72"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 452,
              "y": 179
            }
          },
          "textMFS": "<H<?1xC0001<H<T'3'>>><T' + ('><?1xC0002<H<T'7'>>><T') = '><?1xC0003<H<T'10'>>>>",
          "style": {
            "font-weight": "normal",
            "text-decoration": "none",
            "selectable": false
          }
        },
        "74": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 7,
              "y": -18
            }
          },
          "textMFS": "<T'Adding Two Integers Investigation - Zero Pairs'>",
          "style": {
            "font-size": 20,
            "selectable": false
          }
        },
        "75": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 24,
              "y": 239
            }
          },
          "textMFS": "<VL<T'How could you decide whether an integer sum will generate zero pairs?'><0><0><0><T'How could you decide the number of zero pairs?'><0><0><0><T'What impact will the zero pairs have on the sum?'>>",
          "style": {
            "font-weight": "normal",
            "text-decoration": "none",
            "color": "green",
            "selectable": false
          }
        },
        "76": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "55",
            "1": "54",
            "2": "56",
            "3": "53"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 936,
              "y": 471
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*@1+@2*@3",
          "latentVisibility": true,
          "label": "max (m[4], m[4])",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "77": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "76",
            "1": "58"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 936,
              "y": 493
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0-@1",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "78": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "1",
            "1": "2",
            "2": "58",
            "3": "77"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 815,
              "y": 600
            }
          },
          "textMFS": "<VL<H<T'The sum of '><?1xC0001<H<T'3'>>><T' and '><?1xC0002<H<T'7'>>><T' will generate '><?1xC0003<H<T'0'>>><T' zero pairs leaving '><?1xC0004<H<T'7'>>><T' more '><SR1G1L100<T'blue '>><T'counters.'>>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "font-weight": "normal",
            "text-decoration": "none",
            "selectable": false
          }
        },
        "79": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "72"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1168,
              "y": 408
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1+sgn(-.5+sgn(@0)))/2",
          "latentVisibility": true,
          "label": "m[6]>0",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "80": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "72"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1168,
              "y": 431
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(.5+sgn(@0)))/2",
          "latentVisibility": true,
          "label": "m[6]<0",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "81": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "72"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1168,
              "y": 454
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-abs(sgn(@0))",
          "latentVisibility": true,
          "label": "m[6]=0",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "82": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "1",
            "1": "2",
            "2": "58",
            "3": "77"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 815,
              "y": 620
            }
          },
          "textMFS": "<VL<H<T'The sum of '><?1xC0001<H<T'3'>>><T' and '><?1xC0002<H<T'7'>>><T' will generate '><?1xC0003<H<T'0'>>><T' zero pairs leaving '><?1xC0004<H<T'7'>>><T' more '><SR100G1L1<T'red '>><T'counters.'>>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "font-weight": "normal",
            "text-decoration": "none",
            "selectable": false
          }
        },
        "83": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "1",
            "1": "2",
            "2": "58"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 815,
              "y": 640
            }
          },
          "textMFS": "<VL<H<T'The sum of '><?1xC0001<H<T'3'>>><T' and '><?1xC0002<H<T'7'>>><T' will generate '><?1xC0003<H<T'0'>>><T' zero pairs leaving no unpaired counters.'>>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "font-weight": "normal",
            "text-decoration": "none",
            "selectable": false
          }
        },
        "84": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "80"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 375,
              "y": 605
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1/@0*2",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "85": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 390,
              "y": 628
            }
          },
          "style": {
            "hidden": true
          }
        },
        "86": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "85"
          },
          "angle": -1.5707963267949,
          "distance": 14.173228346456693,
          "constraint": "TranslateFixDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "87": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "86",
            "center": "85",
            "measure": "84"
          },
          "constraint": "DilateMeasureFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "88": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "79"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 375,
              "y": 605
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1/@0*2",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "89": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "86",
            "center": "85",
            "measure": "88"
          },
          "constraint": "DilateMeasureFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "90": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "81"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 375,
              "y": 605
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1/@0*2",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "91": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "86",
            "center": "85",
            "measure": "90"
          },
          "constraint": "DilateMeasureFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "92": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "72"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1008,
              "y": 352
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(@0)",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "93": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "1",
            "1": "2",
            "2": "92"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 815,
              "y": 659
            }
          },
          "textMFS": "<VL<H<T'The sum of '><?1xC0001<H<T'3'>>><T' and '><?1xC0002<H<T'7'>>><T' does not generate zero pairs so there are a total of '><?1xC0003<H<T'10'>>><T' '><SR100G1L1<T'red '>><T'counters.'>>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "font-weight": "normal",
            "text-decoration": "none",
            "selectable": false
          }
        },
        "94": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "1",
            "1": "2",
            "2": "92"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 815,
              "y": 679
            }
          },
          "textMFS": "<VL<H<T'The sum of '><?1xC0001<H<T'3'>>><T' and '><?1xC0002<H<T'7'>>><T' does not generate zero pairs so there are a total of '><?1xC0003<H<T'10'>>><T' '><SR1G1L100<T'blue '>><T'counters.'>>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "font-weight": "normal",
            "text-decoration": "none",
            "selectable": false
          }
        },
        "95": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "49"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1131,
              "y": 526
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1/@0*2",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "96": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "50"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1131,
              "y": 526
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1/@0*2",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "97": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "49"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1019,
              "y": 394
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-@0",
          "latentVisibility": true,
          "label": "m[7]",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "98": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "50"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1019,
              "y": 411
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-@0",
          "latentVisibility": true,
          "label": "m[7]",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "99": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "97",
            "1": "79"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1128,
              "y": 497
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(sgn(@0*@1))",
          "latentVisibility": true,
          "label": "(m[7])^(m[6]>0)",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "100": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "98",
            "1": "80"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1128,
              "y": 519
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(sgn(@0*@1))",
          "latentVisibility": true,
          "label": "(m[7])^(m[6]<0)",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "101": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "99"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1146,
              "y": 538
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1/@0*2",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "102": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "100"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1146,
              "y": 538
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1/@0*2",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "103": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 24,
              "y": 64
            }
          },
          "style": {
            "hidden": true
          }
        },
        "104": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 663,
              "y": 64
            }
          },
          "style": {
            "hidden": true
          }
        },
        "105": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "103",
            "p1": "104"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "106": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1223,
              "y": 500
            }
          },
          "textMFS": "<VL<T'diff signs and greater than 0'>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "font-weight": "normal",
            "text-decoration": "none",
            "color": "rgb(255,128,0)",
            "selectable": false
          }
        },
        "107": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1223,
              "y": 519
            }
          },
          "textMFS": "<VL<T'diff signs and less than 0'>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "font-weight": "normal",
            "text-decoration": "none",
            "color": "rgb(255,128,0)",
            "selectable": false
          }
        },
        "108": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1226,
              "y": 405
            }
          },
          "textMFS": "<VL<T'sum +ve'>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "font-weight": "normal",
            "text-decoration": "none",
            "color": "rgb(255,128,0)",
            "selectable": false
          }
        },
        "109": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1220,
              "y": 428
            }
          },
          "textMFS": "<VL<T'sum -ve'>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "font-weight": "normal",
            "text-decoration": "none",
            "color": "rgb(255,128,0)",
            "selectable": false
          }
        },
        "110": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1228,
              "y": 453
            }
          },
          "textMFS": "<VL<T'sum 0'>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "font-weight": "normal",
            "text-decoration": "none",
            "color": "rgb(255,128,0)",
            "selectable": false
          }
        },
        "111": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "105"
          },
          "value": 0.41471048513302033,
          "constraint": "PointOnPath",
          "style": {
            "hidden": true
          }
        },
        "112": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "111"
          },
          "angle": -1.5707963267949,
          "distance": 14.173228346456693,
          "constraint": "TranslateFixDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "113": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "112",
            "center": "111",
            "measure": "102"
          },
          "constraint": "DilateMeasureFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "114": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "113",
            "text": "78"
          },
          "constraint": "Pegged",
          "style": {
            "font-size": 16,
            "font-weight": "normal",
            "text-decoration": "none",
            "selectable": false
          }
        },
        "115": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "105"
          },
          "value": 0.41784037558685444,
          "constraint": "PointOnPath",
          "style": {
            "hidden": true
          }
        },
        "116": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "115"
          },
          "angle": -1.5707963267949,
          "distance": 14.173228346456693,
          "constraint": "TranslateFixDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "117": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "116",
            "center": "115",
            "measure": "101"
          },
          "constraint": "DilateMeasureFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "118": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "117",
            "text": "82"
          },
          "constraint": "Pegged",
          "style": {
            "font-size": 16,
            "font-weight": "normal",
            "text-decoration": "none",
            "selectable": false
          }
        },
        "119": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "105"
          },
          "value": 0.4131455399061033,
          "constraint": "PointOnPath",
          "style": {
            "hidden": true
          }
        },
        "120": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "119"
          },
          "angle": -1.5707963267949,
          "distance": 14.173228346456693,
          "constraint": "TranslateFixDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "121": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "120",
            "center": "119",
            "measure": "90"
          },
          "constraint": "DilateMeasureFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "122": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "121",
            "text": "83"
          },
          "constraint": "Pegged",
          "style": {
            "font-size": 16,
            "font-weight": "normal",
            "text-decoration": "none",
            "selectable": false
          }
        },
        "123": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "105"
          },
          "value": 0.5633802816901409,
          "constraint": "PointOnPath",
          "style": {
            "hidden": true
          }
        },
        "124": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "123"
          },
          "angle": -1.5707963267949,
          "distance": 14.173228346456693,
          "constraint": "TranslateFixDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "125": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "124",
            "center": "123",
            "measure": "95"
          },
          "constraint": "DilateMeasureFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "126": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "125",
            "text": "93"
          },
          "constraint": "Pegged",
          "style": {
            "font-weight": "normal",
            "text-decoration": "none",
            "selectable": false
          }
        },
        "127": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "105"
          },
          "value": 0.5070422535211268,
          "constraint": "PointOnPath",
          "style": {
            "hidden": true
          }
        },
        "128": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "127"
          },
          "angle": -1.5707963267949,
          "distance": 14.173228346456693,
          "constraint": "TranslateFixDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "129": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "128",
            "center": "127",
            "measure": "96"
          },
          "constraint": "DilateMeasureFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "130": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "129",
            "text": "94"
          },
          "constraint": "Pegged",
          "style": {
            "font-size": 16,
            "font-weight": "normal",
            "text-decoration": "none",
            "selectable": false
          }
        },
        "131": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "3",
            "1": "4",
            "2": "5",
            "3": "6",
            "4": "7",
            "5": "8",
            "6": "9",
            "7": "10",
            "8": "11",
            "9": "12",
            "10": "13",
            "11": "14",
            "12": "15",
            "13": "16",
            "14": "19",
            "15": "20",
            "16": "21",
            "17": "22",
            "18": "23",
            "19": "24",
            "20": "25",
            "21": "26",
            "22": "47",
            "23": "48",
            "24": "49",
            "25": "50",
            "26": "51",
            "27": "52",
            "28": "53",
            "29": "54",
            "30": "57",
            "31": "58",
            "32": "59",
            "33": "60",
            "34": "63",
            "35": "64",
            "36": "70",
            "37": "71",
            "38": "72",
            "39": "76",
            "40": "77",
            "41": "78",
            "42": "79",
            "43": "80",
            "44": "81",
            "45": "82",
            "46": "83",
            "47": "92",
            "48": "93",
            "49": "94",
            "50": "97",
            "51": "98",
            "52": "99",
            "53": "100",
            "54": "106",
            "55": "107",
            "56": "108",
            "57": "109",
            "58": "110"
          },
          "geom": {
            "loc": {
              "x": 1229,
              "y": 5
            }
          },
          "label": "Show Objects",
          "style": {
            "label": {
              "font-size": 10
            },
            "selectable": false
          },
          "constraint": "ActionButtonToggleHideShow",
          "messages": [
            "Hide Objects",
            "Show Objects"
          ],
          "shouldAutogenerateLabel": true
        },
        "132": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 25,
              "y": 277
            }
          },
          "textMFS": "<VL<T'You need to be adding positive and negative integers to create zero pairs.'><0><0><0><T'The same number as the integer with the smaller magnitude (size ignoring the sign).'><0><0><0><T'Reduce the magnitude of the integer with the largest magnitude.'>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-weight": "normal",
            "text-decoration": "none",
            "color": "fuchsia",
            "selectable": false
          }
        },
        "133": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "132"
          },
          "geom": {
            "loc": {
              "x": 642,
              "y": 245
            }
          },
          "label": "Show Answer",
          "style": {
            "color": "rgb(160,160,160)",
            "selectable": false
          },
          "constraint": "ActionButtonToggleHideShow",
          "messages": [
            "Hide Answer",
            "Show Answer"
          ]
        },
        "134": {
          "kind": "Button",
          "genus": "Action",
          "geom": {
            "loc": {
              "x": 751,
              "y": -6
            }
          },
          "label": "Next Page",
          "style": {
            "color": "rgb(160,160,160)",
            "selectable": false
          },
          "constraint": "ActionButtonLinkPage",
          "messages": [
            "Next Page"
          ],
          "pageId": "4"
        },
        "135": {
          "kind": "Button",
          "genus": "Action",
          "geom": {
            "loc": {
              "x": 654,
              "y": -7
            }
          },
          "label": "Previous Page",
          "style": {
            "color": "rgb(160,160,160)",
            "selectable": false
          },
          "constraint": "ActionButtonLinkPage",
          "messages": [
            "Previous Page"
          ],
          "pageId": "2"
        }
      }
    },
    {
      "metadata": {
        "title": "4",
        "id": "4",
        "sketchRect": {
          "top": -28,
          "left": -5,
          "bottom": 663,
          "right": 1128
        }
      },
      "preferences": {
        "units": {
          "length": "cm",
          "angle": "deg"
        },
        "precision": {
          "length": 2,
          "angle": 2,
          "scalar": 2
        },
        "colorableComponents": {
          "Points": {
            "color": "rgb(0,0,252)"
          },
          "Straights": {
            "color": "rgb(0,126,0)"
          },
          "Curves": {
            "color": "black"
          },
          "Interior": {
            "color": "yellow"
          },
          "Plot": {
            "color": "rgb(0,125,0)"
          },
          "PointLocus": {
            "color": "rgb(121,0,0)"
          },
          "Selection": {
            "color": "rgb(188,0,188)"
          },
          "Background": {
            "color": "rgb(248,248,248)"
          },
          "ActionButton": {
            "color": "rgb(255,128,0)"
          },
          "Axis": {
            "color": "rgb(179,179,179)"
          }
        },
        "text": {
          "mathItalicization": true,
          "textTypes": {
            "Label": {
              "font-family": "\"Comic Sans MS\", sans-serif",
              "font-size": 20,
              "font-weight": "normal"
            },
            "Caption": {
              "font-family": "\"Comic Sans MS\", sans-serif",
              "font-size": 18,
              "font-weight": "bold",
              "text-decoration": "underline"
            },
            "Measurement": {
              "font-family": "\"Comic Sans MS\", sans-serif"
            },
            "Action": {
              "label": {
                "font-family": "\"Comic Sans MS\", sans-serif",
                "font-size": 12
              }
            },
            "Table": {
              "font-family": "\"Comic Sans MS\", sans-serif",
              "font-size": 16
            },
            "AxisTicksAndOptionalLabel": {
              "font-family": "\"Comic Sans MS\", sans-serif",
              "font-size": 28
            }
          }
        },
        "limitScrolling": true
      },
      "objects": {
        "1": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 52,
              "y": 177
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "3",
          "label": "first integer",
          "style": {
            "font-size": 16,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true,
            "selectable": false
          }
        },
        "2": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 247,
              "y": 177
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "7",
          "label": "second integer",
          "style": {
            "font-size": 16,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true,
            "selectable": false
          }
        },
        "3": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "1",
            "1": "2"
          },
          "geom": {
            "loc": {
              "x": 1194,
              "y": 135
            }
          },
          "latentVisibility": true,
          "label": "New Integers",
          "style": {
            "hidden": true,
            "label": {
              "font-size": 10
            },
            "selectable": false
          },
          "constraint": "ActionButtonAnimate",
          "messages": [
            "New Integers"
          ],
          "animationStates": [
            {
              "rate": 1,
              "timeInterval": 1,
              "repeat": false,
              "motionType": "random",
              "lowerParamBound": -10.5,
              "upperParamBound": 10.5,
              "discrete": false
            },
            {
              "rate": 1,
              "timeInterval": 1,
              "repeat": false,
              "motionType": "random",
              "lowerParamBound": -10,
              "upperParamBound": 10,
              "discrete": false
            }
          ]
        },
        "4": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "1"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 791,
              "y": 95
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "round(@0)",
          "latentVisibility": true,
          "label": "m[1]",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "5": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "2"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 966,
              "y": 93
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "round(@0)",
          "latentVisibility": true,
          "label": "m[2]",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "6": {
          "kind": "Expression",
          "genus": "DistanceParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1154,
              "y": 74
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "0.8 cm",
          "latentVisibility": true,
          "label": "rad tile",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true,
            "selectable": false
          }
        },
        "7": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "4"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 791,
              "y": 113
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1+sgn(-.5+sgn(@0)))/2",
          "latentVisibility": true,
          "label": "1st integer >0",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "8": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "5"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 966,
              "y": 111
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1+sgn(-.5+sgn(@0)))/2",
          "latentVisibility": true,
          "label": "2nd integer >0",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "9": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "7"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 791,
              "y": 130
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*255",
          "latentVisibility": true,
          "label": "1st int red",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "10": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {},
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 791,
              "y": 147
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "0*0",
          "latentVisibility": true,
          "label": "1st int green",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "11": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "7"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 791,
              "y": 164
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-@0)*255",
          "latentVisibility": true,
          "label": "1st int blue",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "12": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "8"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 966,
              "y": 129
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*255",
          "latentVisibility": true,
          "label": "2nd int red",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "13": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {},
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 966,
              "y": 146
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "0*0",
          "latentVisibility": true,
          "label": "2nd int green",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "14": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "8"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 966,
              "y": 163
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-@0)*255",
          "latentVisibility": true,
          "label": "2nd int blue",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "15": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "4"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 791,
              "y": 181
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-abs(sgn(@0))",
          "latentVisibility": true,
          "label": "m[1]=0",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "16": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "5"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 972,
              "y": 184
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-abs(sgn(@0))",
          "latentVisibility": true,
          "label": "m[2]=0",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "17": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "4"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 13,
              "y": 76
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0",
          "label": "1",
          "style": {
            "precision": 0,
            "nameOrigin": "noVisibleName",
            "selectable": false
          }
        },
        "18": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "5"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 13,
              "y": 128
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0",
          "label": "f",
          "style": {
            "precision": 0,
            "nameOrigin": "noVisibleName",
            "selectable": false
          }
        },
        "19": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "15",
            "1": "6"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 791,
              "y": 204
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-@0)*@1",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "20": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "16",
            "1": "6"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 972,
              "y": 207
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-@0)*@1",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "21": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "4"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 791,
              "y": 227
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(@0)",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "22": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "5"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 972,
              "y": 230
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(@0)",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "23": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "21"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 791,
              "y": 249
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0-1",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "24": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "22"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 972,
              "y": 252
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0-1",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "25": {
          "kind": "Expression",
          "genus": "DistanceParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 791,
              "y": 271
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1.9 cm",
          "latentVisibility": true,
          "label": "spacing",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true,
            "selectable": false
          }
        },
        "26": {
          "kind": "Expression",
          "genus": "DistanceParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 972,
              "y": 274
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1.9 cm",
          "latentVisibility": true,
          "label": "spacing",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true,
            "selectable": false
          }
        },
        "27": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 63,
              "y": 58
            }
          },
          "style": {
            "hidden": true
          }
        },
        "28": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 63,
              "y": 424
            }
          },
          "style": {
            "hidden": true
          }
        },
        "29": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "27",
            "p1": "28"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "30": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "29"
          },
          "value": 0.22950819672131148,
          "constraint": "PointOnPath",
          "label": "B",
          "style": {
            "hidden": true
          }
        },
        "31": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "30",
            "distance": "26"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "32": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "30",
            "radius": "20"
          },
          "constraint": "CircleByRadius"
        },
        "33": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "circle": "32"
          },
          "constraint": "CircleInterior",
          "style": {
            "hidden": true,
            "color": "rgb(255,128,0)",
            "layerOrder": 6
          }
        },
        "34": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "source": "33",
            "blue": "14",
            "green": "13",
            "red": "12"
          },
          "colorRange": "ReflectToRange",
          "colorModel": "TrivariateRGB",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeTrivariate",
          "style": {
            "color": "red",
            "layerOrder": 7
          }
        },
        "35": {
          "kind": "Map",
          "genus": "IterateMap",
          "parents": {
            "0": "32",
            "1": "33",
            "2": "34",
            "3": "31",
            "preimage0": "30",
            "map0image0": "31",
            "depth": "24"
          },
          "constraint": "IterateMapByParametricDepth",
          "rerandomizePointsOnPaths": false,
          "finalIterationOnly": false
        },
        "36": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "34",
            "map": "35"
          },
          "constraint": "IterateImage",
          "style": {
            "opacity": 0.49999237060546875,
            "layerOrder": 12
          }
        },
        "37": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "32",
            "map": "35"
          },
          "constraint": "IterateImage",
          "style": {
            "line-style": "solid",
            "width": 3
          }
        },
        "38": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "29"
          },
          "value": 0.08743169398907104,
          "constraint": "PointOnPath",
          "label": "A",
          "style": {
            "hidden": true
          }
        },
        "39": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "38",
            "distance": "25"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "40": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "38",
            "radius": "19"
          },
          "constraint": "CircleByRadius"
        },
        "41": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "circle": "40"
          },
          "constraint": "CircleInterior",
          "style": {
            "hidden": true,
            "color": "black",
            "layerOrder": 8
          }
        },
        "42": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "source": "41",
            "blue": "11",
            "green": "10",
            "red": "9"
          },
          "colorRange": "ReflectToRange",
          "colorModel": "TrivariateRGB",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeTrivariate",
          "style": {
            "color": "red",
            "layerOrder": 9
          }
        },
        "43": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 13,
              "y": 100
            }
          },
          "textMFS": "<T'+'>",
          "style": {
            "font-weight": "normal",
            "text-decoration": "none",
            "selectable": false
          }
        },
        "44": {
          "kind": "Map",
          "genus": "IterateMap",
          "parents": {
            "0": "39",
            "1": "40",
            "2": "41",
            "3": "42",
            "preimage0": "38",
            "map0image0": "39",
            "depth": "23"
          },
          "constraint": "IterateMapByParametricDepth",
          "rerandomizePointsOnPaths": false,
          "finalIterationOnly": false
        },
        "45": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "40",
            "map": "44"
          },
          "constraint": "IterateImage",
          "style": {
            "line-style": "solid",
            "width": 3
          }
        },
        "46": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "42",
            "map": "44"
          },
          "constraint": "IterateImage",
          "style": {
            "opacity": 0.49999237060546875,
            "layerOrder": 13
          }
        },
        "47": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "7"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 791,
              "y": 295
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-@0",
          "latentVisibility": true,
          "label": "m[3]",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "48": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "8"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 972,
              "y": 298
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-@0",
          "latentVisibility": true,
          "label": "m[3]",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "49": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "7",
            "1": "8"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 792,
              "y": 356
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(sgn(@0*@1))",
          "latentVisibility": true,
          "label": "both +ve",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "50": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "47",
            "1": "48"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 792,
              "y": 373
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(sgn(@0*@1))",
          "latentVisibility": true,
          "label": "both -ve",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "51": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "49",
            "1": "50"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 792,
              "y": 390
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "sgn(abs(sgn(@0))+abs(sgn(@1)))",
          "latentVisibility": true,
          "label": "same sign",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "52": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "51"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 792,
              "y": 407
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-@0",
          "latentVisibility": true,
          "label": "m[5]",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "53": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "4"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 792,
              "y": 424
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(@0)",
          "latentVisibility": true,
          "label": "m[4]",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "54": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "5"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 792,
              "y": 445
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(@0)",
          "latentVisibility": true,
          "label": "m[4]",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "55": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "53",
            "1": "54"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 520,
              "y": 390
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(.5+sgn(@0-@1)))/2",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "56": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "55"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 520,
              "y": 390
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-@0",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "57": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "55",
            "1": "53",
            "2": "56",
            "3": "54"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 792,
              "y": 466
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*@1+@2*@3",
          "latentVisibility": true,
          "label": "min (m[4], m[4])",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "58": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "52",
            "1": "57"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 792,
              "y": 488
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*@1",
          "latentVisibility": true,
          "label": "# zeros",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "59": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "58",
            "1": "25"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 792,
              "y": 505
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*@1",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "60": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "25",
            "1": "6",
            "2": "19"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 792,
              "y": 546
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(@0-2*@1)/2+@2",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "61": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "38",
            "distance": "60"
          },
          "angle": 3.1415926535897865,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "62": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "30",
            "distance": "60"
          },
          "angle": 3.1415926535897865,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "63": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 792,
              "y": 323
            }
          },
          "textMFS": "<VL<T'determine # of zeros'><T'draw the yellow shade ot cover zeros'>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "font-weight": "normal",
            "text-decoration": "none",
            "color": "rgb(255,128,0)",
            "selectable": false
          }
        },
        "64": {
          "kind": "Expression",
          "genus": "DistanceParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 792,
              "y": 522
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "0.8 cm",
          "latentVisibility": true,
          "label": "vert shift",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 1,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true,
            "selectable": false
          }
        },
        "65": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "62",
            "distance": "64"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "66": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "65",
            "distance": "59"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "67": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "61",
            "distance": "64"
          },
          "angle": -1.5707963267949,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "68": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "67",
            "distance": "59"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "69": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "0": "68",
            "1": "66",
            "2": "65",
            "3": "67"
          },
          "constraint": "PolygonFromPoints",
          "style": {
            "layerOrder": 14
          }
        },
        "70": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 791,
              "y": 24
            }
          },
          "textMFS": "<VL<T'generate first integer'><T'set up RGB colouring'><T'calculations for iteration'>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "font-weight": "normal",
            "text-decoration": "none",
            "color": "rgb(255,128,0)",
            "selectable": false
          }
        },
        "71": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 966,
              "y": 22
            }
          },
          "textMFS": "<VL<T'generate first integer'><T'set up RGB colouring'><T'calculations for iteration'>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "font-weight": "normal",
            "text-decoration": "none",
            "color": "rgb(255,128,0)",
            "selectable": false
          }
        },
        "72": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "4",
            "1": "5"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1008,
              "y": 334
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0+@1",
          "latentVisibility": true,
          "label": "m[6]",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "73": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "4",
            "1": "5",
            "2": "72"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 452,
              "y": 179
            }
          },
          "textMFS": "<H<?1xC0001<H<T'3'>>><T' + ('><?1xC0002<H<T'7'>>><T') = '><?1xC0003<H<T'10'>>>>",
          "style": {
            "font-weight": "normal",
            "text-decoration": "none",
            "selectable": false
          }
        },
        "74": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 10,
              "y": -18
            }
          },
          "textMFS": "<T'Adding Two Integers Investigation - Sign of Sum'>",
          "style": {
            "font-size": 20,
            "selectable": false
          }
        },
        "75": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 24,
              "y": 239
            }
          },
          "textMFS": "<VL<T'When will the sum of two integers be positive?'><0><0><0><0><T'When will the sum of two integers be negative?'><0><0><0><0><T'When will the sum of two integers be neither positive or negative?'>>",
          "style": {
            "font-weight": "normal",
            "text-decoration": "none",
            "color": "green",
            "selectable": false
          }
        },
        "76": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "55",
            "1": "54",
            "2": "56",
            "3": "53"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 936,
              "y": 471
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*@1+@2*@3",
          "latentVisibility": true,
          "label": "max (m[4], m[4])",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "77": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "76",
            "1": "58"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 936,
              "y": 493
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0-@1",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "78": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "1",
            "1": "2",
            "2": "58",
            "3": "77"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 815,
              "y": 600
            }
          },
          "textMFS": "<VL<H<T'The sum of '><?1xC0001<H<T'3'>>><T' and '><?1xC0002<H<T'7'>>><T' will generate '><?1xC0003<H<T'0'>>><T' zero pairs leaving '><?1xC0004<H<T'7'>>><T' more '><SR1G1L100<T'blue '>><T'counters.'>>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "font-weight": "normal",
            "text-decoration": "none",
            "selectable": false
          }
        },
        "79": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "72"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1168,
              "y": 408
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1+sgn(-.5+sgn(@0)))/2",
          "latentVisibility": true,
          "label": "m[6]>0",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "80": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "72"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1168,
              "y": 431
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(.5+sgn(@0)))/2",
          "latentVisibility": true,
          "label": "m[6]<0",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "81": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "72"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1168,
              "y": 454
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-abs(sgn(@0))",
          "latentVisibility": true,
          "label": "m[6]=0",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "82": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "1",
            "1": "2",
            "2": "58",
            "3": "77"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 815,
              "y": 620
            }
          },
          "textMFS": "<VL<H<T'The sum of '><?1xC0001<H<T'3'>>><T' and '><?1xC0002<H<T'7'>>><T' will generate '><?1xC0003<H<T'0'>>><T' zero pairs leaving '><?1xC0004<H<T'7'>>><T' more '><SR100G1L1<T'red '>><T'counters.'>>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "font-weight": "normal",
            "text-decoration": "none",
            "selectable": false
          }
        },
        "83": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "1",
            "1": "2",
            "2": "58"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 815,
              "y": 640
            }
          },
          "textMFS": "<VL<H<T'The sum of '><?1xC0001<H<T'3'>>><T' and '><?1xC0002<H<T'7'>>><T' will generate '><?1xC0003<H<T'0'>>><T' zero pairs leaving no unpaired counters.'>>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "font-weight": "normal",
            "text-decoration": "none",
            "selectable": false
          }
        },
        "84": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "80"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 375,
              "y": 605
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1/@0*2",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "85": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 390,
              "y": 628
            }
          },
          "style": {
            "hidden": true
          }
        },
        "86": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "85"
          },
          "angle": -1.5707963267949,
          "distance": 14.173228346456693,
          "constraint": "TranslateFixDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "87": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "86",
            "center": "85",
            "measure": "84"
          },
          "constraint": "DilateMeasureFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "88": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "79"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 375,
              "y": 605
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1/@0*2",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "89": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "86",
            "center": "85",
            "measure": "88"
          },
          "constraint": "DilateMeasureFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "90": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "81"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 375,
              "y": 605
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1/@0*2",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "91": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "86",
            "center": "85",
            "measure": "90"
          },
          "constraint": "DilateMeasureFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "92": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "72"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1008,
              "y": 352
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(@0)",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "93": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "1",
            "1": "2",
            "2": "92"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 815,
              "y": 659
            }
          },
          "textMFS": "<VL<H<T'The sum of '><?1xC0001<H<T'3'>>><T' and '><?1xC0002<H<T'7'>>><T' does not generate zero pairs so there are a total of '><?1xC0003<H<T'10'>>><T' '><SR100G1L1<T'red '>><T'counters.'>>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "font-weight": "normal",
            "text-decoration": "none",
            "selectable": false
          }
        },
        "94": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "1",
            "1": "2",
            "2": "92"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 815,
              "y": 679
            }
          },
          "textMFS": "<VL<H<T'The sum of '><?1xC0001<H<T'3'>>><T' and '><?1xC0002<H<T'7'>>><T' does not generate zero pairs so there are a total of '><?1xC0003<H<T'10'>>><T' '><SR1G1L100<T'blue '>><T'counters.'>>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "font-weight": "normal",
            "text-decoration": "none",
            "selectable": false
          }
        },
        "95": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "49"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1131,
              "y": 526
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1/@0*2",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "96": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "50"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1131,
              "y": 526
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1/@0*2",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "97": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "49"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1019,
              "y": 394
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-@0",
          "latentVisibility": true,
          "label": "m[7]",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "98": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "50"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1019,
              "y": 411
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-@0",
          "latentVisibility": true,
          "label": "m[7]",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "99": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "97",
            "1": "79"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1128,
              "y": 497
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(sgn(@0*@1))",
          "latentVisibility": true,
          "label": "(m[7])^(m[6]>0)",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "100": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "98",
            "1": "80"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1128,
              "y": 519
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(sgn(@0*@1))",
          "latentVisibility": true,
          "label": "(m[7])^(m[6]<0)",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "101": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "99"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1146,
              "y": 538
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1/@0*2",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "102": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "100"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1146,
              "y": 538
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1/@0*2",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "103": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 24,
              "y": 64
            }
          },
          "style": {
            "hidden": true
          }
        },
        "104": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 663,
              "y": 64
            }
          },
          "style": {
            "hidden": true
          }
        },
        "105": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "103",
            "p1": "104"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "106": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1223,
              "y": 500
            }
          },
          "textMFS": "<VL<T'diff signs and greater than 0'>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "font-weight": "normal",
            "text-decoration": "none",
            "color": "rgb(255,128,0)",
            "selectable": false
          }
        },
        "107": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1223,
              "y": 519
            }
          },
          "textMFS": "<VL<T'diff signs and less than 0'>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "font-weight": "normal",
            "text-decoration": "none",
            "color": "rgb(255,128,0)",
            "selectable": false
          }
        },
        "108": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1226,
              "y": 405
            }
          },
          "textMFS": "<VL<T'sum +ve'>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "font-weight": "normal",
            "text-decoration": "none",
            "color": "rgb(255,128,0)",
            "selectable": false
          }
        },
        "109": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1220,
              "y": 428
            }
          },
          "textMFS": "<VL<T'sum -ve'>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "font-weight": "normal",
            "text-decoration": "none",
            "color": "rgb(255,128,0)",
            "selectable": false
          }
        },
        "110": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1228,
              "y": 453
            }
          },
          "textMFS": "<VL<T'sum 0'>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "font-weight": "normal",
            "text-decoration": "none",
            "color": "rgb(255,128,0)",
            "selectable": false
          }
        },
        "111": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "105"
          },
          "value": 0.41471048513302033,
          "constraint": "PointOnPath",
          "style": {
            "hidden": true
          }
        },
        "112": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "111"
          },
          "angle": -1.5707963267949,
          "distance": 14.173228346456693,
          "constraint": "TranslateFixDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "113": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "112",
            "center": "111",
            "measure": "102"
          },
          "constraint": "DilateMeasureFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "114": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "113",
            "text": "78"
          },
          "constraint": "Pegged",
          "style": {
            "font-size": 16,
            "font-weight": "normal",
            "text-decoration": "none",
            "selectable": false
          }
        },
        "115": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "105"
          },
          "value": 0.41784037558685444,
          "constraint": "PointOnPath",
          "style": {
            "hidden": true
          }
        },
        "116": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "115"
          },
          "angle": -1.5707963267949,
          "distance": 14.173228346456693,
          "constraint": "TranslateFixDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "117": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "116",
            "center": "115",
            "measure": "101"
          },
          "constraint": "DilateMeasureFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "118": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "117",
            "text": "82"
          },
          "constraint": "Pegged",
          "style": {
            "font-size": 16,
            "font-weight": "normal",
            "text-decoration": "none",
            "selectable": false
          }
        },
        "119": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "105"
          },
          "value": 0.4131455399061033,
          "constraint": "PointOnPath",
          "style": {
            "hidden": true
          }
        },
        "120": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "119"
          },
          "angle": -1.5707963267949,
          "distance": 14.173228346456693,
          "constraint": "TranslateFixDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "121": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "120",
            "center": "119",
            "measure": "90"
          },
          "constraint": "DilateMeasureFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "122": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "121",
            "text": "83"
          },
          "constraint": "Pegged",
          "style": {
            "font-size": 16,
            "font-weight": "normal",
            "text-decoration": "none",
            "selectable": false
          }
        },
        "123": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "105"
          },
          "value": 0.49139280125195617,
          "constraint": "PointOnPath",
          "style": {
            "hidden": true
          }
        },
        "124": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "123"
          },
          "angle": -1.5707963267949,
          "distance": 14.173228346456693,
          "constraint": "TranslateFixDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "125": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "124",
            "center": "123",
            "measure": "95"
          },
          "constraint": "DilateMeasureFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "126": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "125",
            "text": "93"
          },
          "constraint": "Pegged",
          "style": {
            "font-size": 16,
            "font-weight": "normal",
            "text-decoration": "none",
            "selectable": false
          }
        },
        "127": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "105"
          },
          "value": 0.5070422535211268,
          "constraint": "PointOnPath",
          "style": {
            "hidden": true
          }
        },
        "128": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "127"
          },
          "angle": -1.5707963267949,
          "distance": 14.173228346456693,
          "constraint": "TranslateFixDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "129": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "128",
            "center": "127",
            "measure": "96"
          },
          "constraint": "DilateMeasureFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "130": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "129",
            "text": "94"
          },
          "constraint": "Pegged",
          "style": {
            "font-size": 16,
            "font-weight": "normal",
            "text-decoration": "none",
            "selectable": false
          }
        },
        "131": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "3",
            "1": "4",
            "2": "5",
            "3": "6",
            "4": "7",
            "5": "8",
            "6": "9",
            "7": "10",
            "8": "11",
            "9": "12",
            "10": "13",
            "11": "14",
            "12": "15",
            "13": "16",
            "14": "19",
            "15": "20",
            "16": "21",
            "17": "22",
            "18": "23",
            "19": "24",
            "20": "25",
            "21": "26",
            "22": "47",
            "23": "48",
            "24": "49",
            "25": "50",
            "26": "51",
            "27": "52",
            "28": "53",
            "29": "54",
            "30": "57",
            "31": "58",
            "32": "59",
            "33": "60",
            "34": "63",
            "35": "64",
            "36": "70",
            "37": "71",
            "38": "72",
            "39": "76",
            "40": "77",
            "41": "78",
            "42": "79",
            "43": "80",
            "44": "81",
            "45": "82",
            "46": "83",
            "47": "92",
            "48": "93",
            "49": "94",
            "50": "97",
            "51": "98",
            "52": "99",
            "53": "100",
            "54": "106",
            "55": "107",
            "56": "108",
            "57": "109",
            "58": "110"
          },
          "geom": {
            "loc": {
              "x": 1229,
              "y": 5
            }
          },
          "label": "Show Objects",
          "style": {
            "label": {
              "font-size": 10
            },
            "selectable": false
          },
          "constraint": "ActionButtonToggleHideShow",
          "messages": [
            "Hide Objects",
            "Show Objects"
          ],
          "shouldAutogenerateLabel": true
        },
        "132": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 27,
              "y": 269
            }
          },
          "textMFS": "<VL<T'If both integers are positive.'><T'If one integer is positive and the other is negative but the positive'><T'integer has the greater magnitude.'><0><0><T'If both integers are negative.'><T'If one integer is positive and the other is negative but the negative'><T'integer has the greater magnitude.'><0><0><T'If both integers have the same magnitude but opposite signs.'><F111xxFFFFFFFFx20x420x>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-weight": "normal",
            "text-decoration": "none",
            "color": "fuchsia",
            "selectable": false
          }
        },
        "133": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "132"
          },
          "geom": {
            "loc": {
              "x": 452,
              "y": 250
            }
          },
          "label": "Show Answer",
          "style": {
            "color": "rgb(160,160,160)",
            "selectable": false
          },
          "constraint": "ActionButtonToggleHideShow",
          "messages": [
            "Hide Answer",
            "Show Answer"
          ]
        },
        "134": {
          "kind": "Button",
          "genus": "Action",
          "geom": {
            "loc": {
              "x": 751,
              "y": -8
            }
          },
          "label": "Next Page",
          "style": {
            "color": "rgb(160,160,160)",
            "selectable": false
          },
          "constraint": "ActionButtonLinkPage",
          "messages": [
            "Next Page"
          ],
          "pageId": "5"
        },
        "135": {
          "kind": "Button",
          "genus": "Action",
          "geom": {
            "loc": {
              "x": 654,
              "y": -7
            }
          },
          "label": "Previous Page",
          "style": {
            "color": "rgb(160,160,160)",
            "selectable": false
          },
          "constraint": "ActionButtonLinkPage",
          "messages": [
            "Previous Page"
          ],
          "pageId": "3"
        }
      }
    },
    {
      "metadata": {
        "title": "5",
        "id": "5",
        "sketchRect": {
          "top": -28,
          "left": -5,
          "bottom": 663,
          "right": 1128
        }
      },
      "preferences": {
        "units": {
          "length": "cm",
          "angle": "deg"
        },
        "precision": {
          "length": 2,
          "angle": 2,
          "scalar": 2
        },
        "colorableComponents": {
          "Points": {
            "color": "rgb(0,0,252)"
          },
          "Straights": {
            "color": "rgb(0,126,0)"
          },
          "Curves": {
            "color": "black"
          },
          "Interior": {
            "color": "yellow"
          },
          "Plot": {
            "color": "rgb(0,125,0)"
          },
          "PointLocus": {
            "color": "rgb(121,0,0)"
          },
          "Selection": {
            "color": "rgb(188,0,188)"
          },
          "Background": {
            "color": "rgb(248,248,248)"
          },
          "ActionButton": {
            "color": "rgb(255,128,0)"
          },
          "Axis": {
            "color": "rgb(179,179,179)"
          }
        },
        "text": {
          "mathItalicization": true,
          "textTypes": {
            "Label": {
              "font-family": "\"Comic Sans MS\", sans-serif",
              "font-size": 20,
              "font-weight": "normal"
            },
            "Caption": {
              "font-family": "\"Comic Sans MS\", sans-serif",
              "font-size": 18,
              "font-weight": "bold",
              "text-decoration": "underline"
            },
            "Measurement": {
              "font-family": "\"Comic Sans MS\", sans-serif"
            },
            "Action": {
              "label": {
                "font-family": "\"Comic Sans MS\", sans-serif",
                "font-size": 12
              }
            },
            "Table": {
              "font-family": "\"Comic Sans MS\", sans-serif",
              "font-size": 16
            },
            "AxisTicksAndOptionalLabel": {
              "font-family": "\"Comic Sans MS\", sans-serif",
              "font-size": 28
            }
          }
        },
        "limitScrolling": true
      },
      "objects": {
        "1": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 52,
              "y": 177
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "3",
          "label": "first integer",
          "style": {
            "font-size": 16,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true,
            "selectable": false
          }
        },
        "2": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 247,
              "y": 177
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "7",
          "label": "second integer",
          "style": {
            "font-size": 16,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true,
            "selectable": false
          }
        },
        "3": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "1",
            "1": "2"
          },
          "geom": {
            "loc": {
              "x": 1194,
              "y": 135
            }
          },
          "latentVisibility": true,
          "label": "New Integers",
          "style": {
            "hidden": true,
            "label": {
              "font-size": 10
            },
            "selectable": false
          },
          "constraint": "ActionButtonAnimate",
          "messages": [
            "New Integers"
          ],
          "animationStates": [
            {
              "rate": 1,
              "timeInterval": 1,
              "repeat": false,
              "motionType": "random",
              "lowerParamBound": -10.5,
              "upperParamBound": 10.5,
              "discrete": false
            },
            {
              "rate": 1,
              "timeInterval": 1,
              "repeat": false,
              "motionType": "random",
              "lowerParamBound": -10,
              "upperParamBound": 10,
              "discrete": false
            }
          ]
        },
        "4": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "1"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 791,
              "y": 95
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "round(@0)",
          "latentVisibility": true,
          "label": "m[1]",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "5": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "2"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 966,
              "y": 93
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "round(@0)",
          "latentVisibility": true,
          "label": "m[2]",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "6": {
          "kind": "Expression",
          "genus": "DistanceParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1154,
              "y": 74
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "0.8 cm",
          "latentVisibility": true,
          "label": "rad tile",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true,
            "selectable": false
          }
        },
        "7": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "4"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 791,
              "y": 113
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1+sgn(-.5+sgn(@0)))/2",
          "latentVisibility": true,
          "label": "1st integer >0",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "8": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "5"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 966,
              "y": 111
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1+sgn(-.5+sgn(@0)))/2",
          "latentVisibility": true,
          "label": "2nd integer >0",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "9": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "7"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 791,
              "y": 130
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*255",
          "latentVisibility": true,
          "label": "1st int red",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "10": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {},
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 791,
              "y": 147
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "0*0",
          "latentVisibility": true,
          "label": "1st int green",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "11": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "7"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 791,
              "y": 164
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-@0)*255",
          "latentVisibility": true,
          "label": "1st int blue",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "12": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "8"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 966,
              "y": 129
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*255",
          "latentVisibility": true,
          "label": "2nd int red",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "13": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {},
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 966,
              "y": 146
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "0*0",
          "latentVisibility": true,
          "label": "2nd int green",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "14": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "8"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 966,
              "y": 163
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-@0)*255",
          "latentVisibility": true,
          "label": "2nd int blue",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "15": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "4"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 791,
              "y": 181
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-abs(sgn(@0))",
          "latentVisibility": true,
          "label": "m[1]=0",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "16": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "5"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 972,
              "y": 184
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-abs(sgn(@0))",
          "latentVisibility": true,
          "label": "m[2]=0",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "17": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "4"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 16,
              "y": 76
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0",
          "label": "1",
          "style": {
            "precision": 0,
            "nameOrigin": "noVisibleName",
            "selectable": false
          }
        },
        "18": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "5"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 16,
              "y": 128
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0",
          "label": "f",
          "style": {
            "precision": 0,
            "nameOrigin": "noVisibleName",
            "selectable": false
          }
        },
        "19": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "15",
            "1": "6"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 791,
              "y": 204
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-@0)*@1",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "20": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "16",
            "1": "6"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 972,
              "y": 207
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-@0)*@1",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "21": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "4"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 791,
              "y": 227
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(@0)",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "22": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "5"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 972,
              "y": 230
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(@0)",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "23": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "21"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 791,
              "y": 249
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0-1",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "24": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "22"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 972,
              "y": 252
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0-1",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "25": {
          "kind": "Expression",
          "genus": "DistanceParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 791,
              "y": 271
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1.9 cm",
          "latentVisibility": true,
          "label": "spacing",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true,
            "selectable": false
          }
        },
        "26": {
          "kind": "Expression",
          "genus": "DistanceParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 972,
              "y": 274
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1.9 cm",
          "latentVisibility": true,
          "label": "spacing",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true,
            "selectable": false
          }
        },
        "27": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 63,
              "y": 58
            }
          },
          "style": {
            "hidden": true
          }
        },
        "28": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 63,
              "y": 424
            }
          },
          "style": {
            "hidden": true
          }
        },
        "29": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "27",
            "p1": "28"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "30": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "29"
          },
          "value": 0.22950819672131148,
          "constraint": "PointOnPath",
          "label": "B",
          "style": {
            "hidden": true
          }
        },
        "31": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "30",
            "distance": "26"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "32": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "30",
            "radius": "20"
          },
          "constraint": "CircleByRadius"
        },
        "33": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "circle": "32"
          },
          "constraint": "CircleInterior",
          "style": {
            "hidden": true,
            "color": "rgb(255,128,0)",
            "layerOrder": 6
          }
        },
        "34": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "source": "33",
            "blue": "14",
            "green": "13",
            "red": "12"
          },
          "colorRange": "ReflectToRange",
          "colorModel": "TrivariateRGB",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeTrivariate",
          "style": {
            "color": "red",
            "layerOrder": 7
          }
        },
        "35": {
          "kind": "Map",
          "genus": "IterateMap",
          "parents": {
            "0": "32",
            "1": "33",
            "2": "34",
            "3": "31",
            "preimage0": "30",
            "map0image0": "31",
            "depth": "24"
          },
          "constraint": "IterateMapByParametricDepth",
          "rerandomizePointsOnPaths": false,
          "finalIterationOnly": false
        },
        "36": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "34",
            "map": "35"
          },
          "constraint": "IterateImage",
          "style": {
            "opacity": 0.49999237060546875,
            "layerOrder": 12
          }
        },
        "37": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "32",
            "map": "35"
          },
          "constraint": "IterateImage",
          "style": {
            "line-style": "solid",
            "width": 3
          }
        },
        "38": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "29"
          },
          "value": 0.08743169398907104,
          "constraint": "PointOnPath",
          "label": "A",
          "style": {
            "hidden": true
          }
        },
        "39": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "38",
            "distance": "25"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "40": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "38",
            "radius": "19"
          },
          "constraint": "CircleByRadius"
        },
        "41": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "circle": "40"
          },
          "constraint": "CircleInterior",
          "style": {
            "hidden": true,
            "color": "black",
            "layerOrder": 8
          }
        },
        "42": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "source": "41",
            "blue": "11",
            "green": "10",
            "red": "9"
          },
          "colorRange": "ReflectToRange",
          "colorModel": "TrivariateRGB",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeTrivariate",
          "style": {
            "color": "red",
            "layerOrder": 9
          }
        },
        "43": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 16,
              "y": 100
            }
          },
          "textMFS": "<T'+'>",
          "style": {
            "font-weight": "normal",
            "text-decoration": "none",
            "selectable": false
          }
        },
        "44": {
          "kind": "Map",
          "genus": "IterateMap",
          "parents": {
            "0": "39",
            "1": "40",
            "2": "41",
            "3": "42",
            "preimage0": "38",
            "map0image0": "39",
            "depth": "23"
          },
          "constraint": "IterateMapByParametricDepth",
          "rerandomizePointsOnPaths": false,
          "finalIterationOnly": false
        },
        "45": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "40",
            "map": "44"
          },
          "constraint": "IterateImage",
          "style": {
            "line-style": "solid",
            "width": 3
          }
        },
        "46": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "42",
            "map": "44"
          },
          "constraint": "IterateImage",
          "style": {
            "opacity": 0.49999237060546875,
            "layerOrder": 13
          }
        },
        "47": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "7"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 791,
              "y": 295
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-@0",
          "latentVisibility": true,
          "label": "m[3]",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "48": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "8"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 972,
              "y": 298
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-@0",
          "latentVisibility": true,
          "label": "m[3]",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "49": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "7",
            "1": "8"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 792,
              "y": 356
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(sgn(@0*@1))",
          "latentVisibility": true,
          "label": "both +ve",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "50": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "47",
            "1": "48"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 792,
              "y": 373
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(sgn(@0*@1))",
          "latentVisibility": true,
          "label": "both -ve",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "51": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "49",
            "1": "50"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 792,
              "y": 390
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "sgn(abs(sgn(@0))+abs(sgn(@1)))",
          "latentVisibility": true,
          "label": "same sign",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "52": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "51"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 792,
              "y": 407
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-@0",
          "latentVisibility": true,
          "label": "m[5]",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "53": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "4"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 792,
              "y": 424
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(@0)",
          "latentVisibility": true,
          "label": "m[4]",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "54": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "5"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 792,
              "y": 445
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(@0)",
          "latentVisibility": true,
          "label": "m[4]",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "55": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "53",
            "1": "54"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 520,
              "y": 390
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(.5+sgn(@0-@1)))/2",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "56": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "55"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 520,
              "y": 390
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-@0",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "57": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "55",
            "1": "53",
            "2": "56",
            "3": "54"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 792,
              "y": 466
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*@1+@2*@3",
          "latentVisibility": true,
          "label": "min (m[4], m[4])",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "58": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "52",
            "1": "57"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 792,
              "y": 488
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*@1",
          "latentVisibility": true,
          "label": "# zeros",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "59": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "58",
            "1": "25"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 792,
              "y": 505
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*@1",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "60": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "25",
            "1": "6",
            "2": "19"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 792,
              "y": 546
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(@0-2*@1)/2+@2",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "61": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "38",
            "distance": "60"
          },
          "angle": 3.1415926535897865,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "62": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "30",
            "distance": "60"
          },
          "angle": 3.1415926535897865,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "63": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 792,
              "y": 323
            }
          },
          "textMFS": "<VL<T'determine # of zeros'><T'draw the yellow shade ot cover zeros'>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "font-weight": "normal",
            "text-decoration": "none",
            "color": "rgb(255,128,0)",
            "selectable": false
          }
        },
        "64": {
          "kind": "Expression",
          "genus": "DistanceParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 792,
              "y": 522
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "0.8 cm",
          "latentVisibility": true,
          "label": "vert shift",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 1,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true,
            "selectable": false
          }
        },
        "65": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "62",
            "distance": "64"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "66": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "65",
            "distance": "59"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "67": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "61",
            "distance": "64"
          },
          "angle": -1.5707963267949,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "68": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "67",
            "distance": "59"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "69": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "0": "68",
            "1": "66",
            "2": "65",
            "3": "67"
          },
          "constraint": "PolygonFromPoints",
          "style": {
            "layerOrder": 14
          }
        },
        "70": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 791,
              "y": 24
            }
          },
          "textMFS": "<VL<T'generate first integer'><T'set up RGB colouring'><T'calculations for iteration'>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "font-weight": "normal",
            "text-decoration": "none",
            "color": "rgb(255,128,0)",
            "selectable": false
          }
        },
        "71": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 966,
              "y": 22
            }
          },
          "textMFS": "<VL<T'generate first integer'><T'set up RGB colouring'><T'calculations for iteration'>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "font-weight": "normal",
            "text-decoration": "none",
            "color": "rgb(255,128,0)",
            "selectable": false
          }
        },
        "72": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "4",
            "1": "5"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1008,
              "y": 334
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0+@1",
          "latentVisibility": true,
          "label": "m[6]",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "73": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "4",
            "1": "5",
            "2": "72"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 452,
              "y": 179
            }
          },
          "textMFS": "<H<?1xC0001<H<T'3'>>><T' + ('><?1xC0002<H<T'7'>>><T') = '><?1xC0003<H<T'10'>>>>",
          "style": {
            "font-weight": "normal",
            "text-decoration": "none",
            "selectable": false
          }
        },
        "74": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 5,
              "y": -18
            }
          },
          "textMFS": "<T'Adding Two Integers Consolidation'>",
          "style": {
            "font-size": 20,
            "selectable": false
          }
        },
        "75": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 24,
              "y": 239
            }
          },
          "textMFS": "<VL<SR1G1L1<T'Decide whether each statement is always true, sometimes true or never true.'>><0><T'The sum of two negative integers is positive.'><0><0><T'The sum of a positive and negative integer is negative.'><0><0><T'The sum of two positive integers is positive.'>>",
          "style": {
            "font-weight": "normal",
            "text-decoration": "none",
            "color": "green",
            "selectable": false
          }
        },
        "76": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "55",
            "1": "54",
            "2": "56",
            "3": "53"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 936,
              "y": 471
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*@1+@2*@3",
          "latentVisibility": true,
          "label": "max (m[4], m[4])",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "77": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "76",
            "1": "58"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 936,
              "y": 493
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0-@1",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "78": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "1",
            "1": "2",
            "2": "58",
            "3": "77"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 815,
              "y": 600
            }
          },
          "textMFS": "<VL<H<T'The sum of '><?1xC0001<H<T'3'>>><T' and '><?1xC0002<H<T'7'>>><T' will generate '><?1xC0003<H<T'0'>>><T' zero pairs leaving '><?1xC0004<H<T'7'>>><T' more '><SR1G1L100<T'blue '>><T'counters.'>>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "font-weight": "normal",
            "text-decoration": "none",
            "selectable": false
          }
        },
        "79": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "72"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1168,
              "y": 408
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1+sgn(-.5+sgn(@0)))/2",
          "latentVisibility": true,
          "label": "m[6]>0",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "80": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "72"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1168,
              "y": 431
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(.5+sgn(@0)))/2",
          "latentVisibility": true,
          "label": "m[6]<0",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "81": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "72"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1168,
              "y": 454
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-abs(sgn(@0))",
          "latentVisibility": true,
          "label": "m[6]=0",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "82": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "1",
            "1": "2",
            "2": "58",
            "3": "77"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 815,
              "y": 620
            }
          },
          "textMFS": "<VL<H<T'The sum of '><?1xC0001<H<T'3'>>><T' and '><?1xC0002<H<T'7'>>><T' will generate '><?1xC0003<H<T'0'>>><T' zero pairs leaving '><?1xC0004<H<T'7'>>><T' more '><SR100G1L1<T'red '>><T'counters.'>>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "font-weight": "normal",
            "text-decoration": "none",
            "selectable": false
          }
        },
        "83": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "1",
            "1": "2",
            "2": "58"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 815,
              "y": 640
            }
          },
          "textMFS": "<VL<H<T'The sum of '><?1xC0001<H<T'3'>>><T' and '><?1xC0002<H<T'7'>>><T' will generate '><?1xC0003<H<T'0'>>><T' zero pairs leaving no unpaired counters.'>>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "font-weight": "normal",
            "text-decoration": "none",
            "selectable": false
          }
        },
        "84": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "80"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 375,
              "y": 605
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1/@0*2",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "85": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 390,
              "y": 628
            }
          },
          "style": {
            "hidden": true
          }
        },
        "86": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "85"
          },
          "angle": -1.5707963267949,
          "distance": 14.173228346456693,
          "constraint": "TranslateFixDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "87": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "86",
            "center": "85",
            "measure": "84"
          },
          "constraint": "DilateMeasureFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "88": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "79"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 375,
              "y": 605
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1/@0*2",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "89": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "86",
            "center": "85",
            "measure": "88"
          },
          "constraint": "DilateMeasureFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "90": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "81"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 375,
              "y": 605
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1/@0*2",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "91": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "86",
            "center": "85",
            "measure": "90"
          },
          "constraint": "DilateMeasureFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "92": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "72"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1008,
              "y": 352
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(@0)",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "93": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "1",
            "1": "2",
            "2": "92"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 815,
              "y": 659
            }
          },
          "textMFS": "<VL<H<T'The sum of '><?1xC0001<H<T'3'>>><T' and '><?1xC0002<H<T'7'>>><T' does not generate zero pairs so there are a total of '><?1xC0003<H<T'10'>>><T' '><SR100G1L1<T'red '>><T'counters.'>>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "font-weight": "normal",
            "text-decoration": "none",
            "selectable": false
          }
        },
        "94": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "1",
            "1": "2",
            "2": "92"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 815,
              "y": 679
            }
          },
          "textMFS": "<VL<H<T'The sum of '><?1xC0001<H<T'3'>>><T' and '><?1xC0002<H<T'7'>>><T' does not generate zero pairs so there are a total of '><?1xC0003<H<T'10'>>><T' '><SR1G1L100<T'blue '>><T'counters.'>>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "font-weight": "normal",
            "text-decoration": "none",
            "selectable": false
          }
        },
        "95": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "49"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1131,
              "y": 526
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1/@0*2",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "96": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "50"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1131,
              "y": 526
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1/@0*2",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "97": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "49"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1019,
              "y": 394
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-@0",
          "latentVisibility": true,
          "label": "m[7]",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "98": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "50"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1019,
              "y": 411
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-@0",
          "latentVisibility": true,
          "label": "m[7]",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "99": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "97",
            "1": "79"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1128,
              "y": 497
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(sgn(@0*@1))",
          "latentVisibility": true,
          "label": "(m[7])^(m[6]>0)",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "100": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "98",
            "1": "80"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1128,
              "y": 519
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(sgn(@0*@1))",
          "latentVisibility": true,
          "label": "(m[7])^(m[6]<0)",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "101": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "99"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1146,
              "y": 538
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1/@0*2",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "102": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "100"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1146,
              "y": 538
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1/@0*2",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "103": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 24,
              "y": 64
            }
          },
          "style": {
            "hidden": true
          }
        },
        "104": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 663,
              "y": 64
            }
          },
          "style": {
            "hidden": true
          }
        },
        "105": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "103",
            "p1": "104"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "106": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1223,
              "y": 500
            }
          },
          "textMFS": "<VL<T'diff signs and greater than 0'>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "font-weight": "normal",
            "text-decoration": "none",
            "color": "rgb(255,128,0)",
            "selectable": false
          }
        },
        "107": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1223,
              "y": 519
            }
          },
          "textMFS": "<VL<T'diff signs and less than 0'>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "font-weight": "normal",
            "text-decoration": "none",
            "color": "rgb(255,128,0)",
            "selectable": false
          }
        },
        "108": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1226,
              "y": 405
            }
          },
          "textMFS": "<VL<T'sum +ve'>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "font-weight": "normal",
            "text-decoration": "none",
            "color": "rgb(255,128,0)",
            "selectable": false
          }
        },
        "109": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1220,
              "y": 428
            }
          },
          "textMFS": "<VL<T'sum -ve'>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "font-weight": "normal",
            "text-decoration": "none",
            "color": "rgb(255,128,0)",
            "selectable": false
          }
        },
        "110": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1228,
              "y": 453
            }
          },
          "textMFS": "<VL<T'sum 0'>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "font-weight": "normal",
            "text-decoration": "none",
            "color": "rgb(255,128,0)",
            "selectable": false
          }
        },
        "111": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "105"
          },
          "value": 0.41471048513302033,
          "constraint": "PointOnPath",
          "style": {
            "hidden": true
          }
        },
        "112": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "111"
          },
          "angle": -1.5707963267949,
          "distance": 14.173228346456693,
          "constraint": "TranslateFixDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "113": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "112",
            "center": "111",
            "measure": "102"
          },
          "constraint": "DilateMeasureFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "114": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "113",
            "text": "78"
          },
          "constraint": "Pegged",
          "style": {
            "font-size": 16,
            "font-weight": "normal",
            "text-decoration": "none",
            "selectable": false
          }
        },
        "115": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "105"
          },
          "value": 0.41784037558685444,
          "constraint": "PointOnPath",
          "style": {
            "hidden": true
          }
        },
        "116": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "115"
          },
          "angle": -1.5707963267949,
          "distance": 14.173228346456693,
          "constraint": "TranslateFixDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "117": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "116",
            "center": "115",
            "measure": "101"
          },
          "constraint": "DilateMeasureFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "118": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "117",
            "text": "82"
          },
          "constraint": "Pegged",
          "style": {
            "font-size": 16,
            "font-weight": "normal",
            "text-decoration": "none",
            "selectable": false
          }
        },
        "119": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "105"
          },
          "value": 0.4131455399061033,
          "constraint": "PointOnPath",
          "style": {
            "hidden": true
          }
        },
        "120": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "119"
          },
          "angle": -1.5707963267949,
          "distance": 14.173228346456693,
          "constraint": "TranslateFixDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "121": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "120",
            "center": "119",
            "measure": "90"
          },
          "constraint": "DilateMeasureFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "122": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "121",
            "text": "83"
          },
          "constraint": "Pegged",
          "style": {
            "font-size": 16,
            "font-weight": "normal",
            "text-decoration": "none",
            "selectable": false
          }
        },
        "123": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "105"
          },
          "value": 0.5555555555555556,
          "constraint": "PointOnPath",
          "style": {
            "hidden": true
          }
        },
        "124": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "123"
          },
          "angle": -1.5707963267949,
          "distance": 14.173228346456693,
          "constraint": "TranslateFixDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "125": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "124",
            "center": "123",
            "measure": "95"
          },
          "constraint": "DilateMeasureFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "126": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "125",
            "text": "93"
          },
          "constraint": "Pegged",
          "style": {
            "font-weight": "normal",
            "text-decoration": "none",
            "selectable": false
          }
        },
        "127": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "105"
          },
          "value": 0.5070422535211268,
          "constraint": "PointOnPath",
          "style": {
            "hidden": true
          }
        },
        "128": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "127"
          },
          "angle": -1.5707963267949,
          "distance": 14.173228346456693,
          "constraint": "TranslateFixDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "129": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "128",
            "center": "127",
            "measure": "96"
          },
          "constraint": "DilateMeasureFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "130": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "129",
            "text": "94"
          },
          "constraint": "Pegged",
          "style": {
            "font-size": 16,
            "font-weight": "normal",
            "text-decoration": "none",
            "selectable": false
          }
        },
        "131": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "3",
            "1": "4",
            "2": "5",
            "3": "6",
            "4": "7",
            "5": "8",
            "6": "9",
            "7": "10",
            "8": "11",
            "9": "12",
            "10": "13",
            "11": "14",
            "12": "15",
            "13": "16",
            "14": "19",
            "15": "20",
            "16": "21",
            "17": "22",
            "18": "23",
            "19": "24",
            "20": "25",
            "21": "26",
            "22": "47",
            "23": "48",
            "24": "49",
            "25": "50",
            "26": "51",
            "27": "52",
            "28": "53",
            "29": "54",
            "30": "57",
            "31": "58",
            "32": "59",
            "33": "60",
            "34": "63",
            "35": "64",
            "36": "70",
            "37": "71",
            "38": "72",
            "39": "76",
            "40": "77",
            "41": "78",
            "42": "79",
            "43": "80",
            "44": "81",
            "45": "82",
            "46": "83",
            "47": "92",
            "48": "93",
            "49": "94",
            "50": "97",
            "51": "98",
            "52": "99",
            "53": "100",
            "54": "106",
            "55": "107",
            "56": "108",
            "57": "109",
            "58": "110"
          },
          "geom": {
            "loc": {
              "x": 1229,
              "y": 5
            }
          },
          "label": "Show Objects",
          "style": {
            "label": {
              "font-size": 10
            },
            "selectable": false
          },
          "constraint": "ActionButtonToggleHideShow",
          "messages": [
            "Hide Objects",
            "Show Objects"
          ],
          "shouldAutogenerateLabel": true
        },
        "132": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 26,
              "y": 314
            }
          },
          "textMFS": "<VL<T'Never true; when adding to negative integers the sum will be more negative not less'><T'negative.'><0><T'Sometimes true; -2 + (+6) = 4; 8 + (-10) = 2'><T'It depends on whether the positive or negative integer has the greater magnitude.'><0><T'Always true; the only way for the sum to become more negative is for the other'><T'integer to be negative.'><F110xxFFFFFFFFx20x82x>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-weight": "normal",
            "text-decoration": "none",
            "color": "fuchsia",
            "selectable": false
          }
        },
        "133": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "132"
          },
          "geom": {
            "loc": {
              "x": 428,
              "y": 296
            }
          },
          "label": "Show Answer",
          "style": {
            "color": "rgb(160,160,160)",
            "selectable": false
          },
          "constraint": "ActionButtonToggleHideShow",
          "messages": [
            "Hide Answer",
            "Show Answer"
          ]
        },
        "134": {
          "kind": "Button",
          "genus": "Action",
          "geom": {
            "loc": {
              "x": 750,
              "y": -7
            }
          },
          "label": "Next Page",
          "style": {
            "color": "rgb(160,160,160)",
            "selectable": false
          },
          "constraint": "ActionButtonLinkPage",
          "messages": [
            "Next Page"
          ],
          "pageId": "6"
        },
        "135": {
          "kind": "Button",
          "genus": "Action",
          "geom": {
            "loc": {
              "x": 654,
              "y": -7
            }
          },
          "label": "Previous Page",
          "style": {
            "color": "rgb(160,160,160)",
            "selectable": false
          },
          "constraint": "ActionButtonLinkPage",
          "messages": [
            "Previous Page"
          ],
          "pageId": "4"
        }
      }
    },
    {
      "metadata": {
        "title": "6",
        "id": "6",
        "sketchRect": {
          "top": -28,
          "left": -5,
          "bottom": 663,
          "right": 1128
        }
      },
      "preferences": {
        "units": {
          "length": "cm",
          "angle": "deg"
        },
        "precision": {
          "length": 2,
          "angle": 2,
          "scalar": 2
        },
        "colorableComponents": {
          "Points": {
            "color": "rgb(0,0,252)"
          },
          "Straights": {
            "color": "rgb(0,126,0)"
          },
          "Curves": {
            "color": "black"
          },
          "Interior": {
            "color": "yellow"
          },
          "Plot": {
            "color": "rgb(0,125,0)"
          },
          "PointLocus": {
            "color": "rgb(121,0,0)"
          },
          "Selection": {
            "color": "rgb(188,0,188)"
          },
          "Background": {
            "color": "rgb(248,248,248)"
          },
          "ActionButton": {
            "color": "rgb(255,128,0)"
          },
          "Axis": {
            "color": "rgb(179,179,179)"
          }
        },
        "text": {
          "mathItalicization": true,
          "textTypes": {
            "Label": {
              "font-family": "\"Comic Sans MS\", sans-serif",
              "font-size": 20,
              "font-weight": "normal"
            },
            "Caption": {
              "font-family": "\"Comic Sans MS\", sans-serif",
              "font-size": 18,
              "font-weight": "bold",
              "text-decoration": "underline"
            },
            "Measurement": {
              "font-family": "\"Comic Sans MS\", sans-serif"
            },
            "Action": {
              "label": {
                "font-family": "\"Comic Sans MS\", sans-serif",
                "font-size": 12
              }
            },
            "Table": {
              "font-family": "\"Comic Sans MS\", sans-serif",
              "font-size": 16
            },
            "AxisTicksAndOptionalLabel": {
              "font-family": "\"Comic Sans MS\", sans-serif",
              "font-size": 28
            }
          }
        },
        "limitScrolling": true
      },
      "objects": {
        "1": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 52,
              "y": 188
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "3",
          "label": "first integer",
          "style": {
            "font-size": 16,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true,
            "selectable": false
          }
        },
        "2": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 239,
              "y": 189
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "7",
          "label": "second integer",
          "style": {
            "font-size": 16,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true,
            "selectable": false
          }
        },
        "3": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "1",
            "1": "2"
          },
          "geom": {
            "loc": {
              "x": 1194,
              "y": 135
            }
          },
          "latentVisibility": true,
          "label": "New Integers",
          "style": {
            "hidden": true,
            "label": {
              "font-size": 10
            },
            "selectable": false
          },
          "constraint": "ActionButtonAnimate",
          "messages": [
            "New Integers"
          ],
          "animationStates": [
            {
              "rate": 1,
              "timeInterval": 1,
              "repeat": false,
              "motionType": "random",
              "lowerParamBound": -10.5,
              "upperParamBound": 10.5,
              "discrete": false
            },
            {
              "rate": 1,
              "timeInterval": 1,
              "repeat": false,
              "motionType": "random",
              "lowerParamBound": -10,
              "upperParamBound": 10,
              "discrete": false
            }
          ]
        },
        "4": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "1"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 791,
              "y": 95
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "round(@0)",
          "latentVisibility": true,
          "label": "m[1]",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "5": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "2"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 966,
              "y": 93
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "round(@0)",
          "latentVisibility": true,
          "label": "m[2]",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "6": {
          "kind": "Expression",
          "genus": "DistanceParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1154,
              "y": 74
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "0.8 cm",
          "latentVisibility": true,
          "label": "rad tile",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true,
            "selectable": false
          }
        },
        "7": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "4"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 791,
              "y": 113
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1+sgn(-.5+sgn(@0)))/2",
          "latentVisibility": true,
          "label": "1st integer >0",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "8": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "5"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 966,
              "y": 111
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1+sgn(-.5+sgn(@0)))/2",
          "latentVisibility": true,
          "label": "2nd integer >0",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "9": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "7"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 791,
              "y": 130
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*255",
          "latentVisibility": true,
          "label": "1st int red",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "10": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {},
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 791,
              "y": 147
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "0*0",
          "latentVisibility": true,
          "label": "1st int green",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "11": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "7"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 791,
              "y": 164
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-@0)*255",
          "latentVisibility": true,
          "label": "1st int blue",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "12": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "8"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 966,
              "y": 129
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*255",
          "latentVisibility": true,
          "label": "2nd int red",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "13": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {},
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 966,
              "y": 146
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "0*0",
          "latentVisibility": true,
          "label": "2nd int green",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "14": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "8"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 966,
              "y": 163
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-@0)*255",
          "latentVisibility": true,
          "label": "2nd int blue",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "15": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "4"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 791,
              "y": 181
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-abs(sgn(@0))",
          "latentVisibility": true,
          "label": "m[1]=0",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "16": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "5"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 972,
              "y": 184
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-abs(sgn(@0))",
          "latentVisibility": true,
          "label": "m[2]=0",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "17": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "4"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 16,
              "y": 76
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0",
          "label": "1",
          "style": {
            "precision": 0,
            "nameOrigin": "noVisibleName",
            "selectable": false
          }
        },
        "18": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "5"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 16,
              "y": 128
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0",
          "label": "f",
          "style": {
            "precision": 0,
            "nameOrigin": "noVisibleName",
            "selectable": false
          }
        },
        "19": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "15",
            "1": "6"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 791,
              "y": 204
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-@0)*@1",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "20": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "16",
            "1": "6"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 972,
              "y": 207
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-@0)*@1",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "21": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "4"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 791,
              "y": 227
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(@0)",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "22": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "5"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 972,
              "y": 230
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(@0)",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "23": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "21"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 791,
              "y": 249
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0-1",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "24": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "22"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 972,
              "y": 252
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0-1",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "25": {
          "kind": "Expression",
          "genus": "DistanceParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 791,
              "y": 271
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1.9 cm",
          "latentVisibility": true,
          "label": "spacing",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true,
            "selectable": false
          }
        },
        "26": {
          "kind": "Expression",
          "genus": "DistanceParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 972,
              "y": 274
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1.9 cm",
          "latentVisibility": true,
          "label": "spacing",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true,
            "selectable": false
          }
        },
        "27": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 63,
              "y": 58
            }
          },
          "style": {
            "hidden": true
          }
        },
        "28": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 63,
              "y": 424
            }
          },
          "style": {
            "hidden": true
          }
        },
        "29": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "27",
            "p1": "28"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "30": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "29"
          },
          "value": 0.22950819672131148,
          "constraint": "PointOnPath",
          "label": "B",
          "style": {
            "hidden": true
          }
        },
        "31": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "30",
            "distance": "26"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "32": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "30",
            "radius": "20"
          },
          "constraint": "CircleByRadius"
        },
        "33": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "circle": "32"
          },
          "constraint": "CircleInterior",
          "style": {
            "hidden": true,
            "color": "rgb(255,128,0)",
            "layerOrder": 6
          }
        },
        "34": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "source": "33",
            "blue": "14",
            "green": "13",
            "red": "12"
          },
          "colorRange": "ReflectToRange",
          "colorModel": "TrivariateRGB",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeTrivariate",
          "style": {
            "color": "red",
            "layerOrder": 7
          }
        },
        "35": {
          "kind": "Map",
          "genus": "IterateMap",
          "parents": {
            "0": "32",
            "1": "33",
            "2": "34",
            "3": "31",
            "preimage0": "30",
            "map0image0": "31",
            "depth": "24"
          },
          "constraint": "IterateMapByParametricDepth",
          "rerandomizePointsOnPaths": false,
          "finalIterationOnly": false
        },
        "36": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "34",
            "map": "35"
          },
          "constraint": "IterateImage",
          "style": {
            "opacity": 0.49999237060546875,
            "layerOrder": 12
          }
        },
        "37": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "32",
            "map": "35"
          },
          "constraint": "IterateImage",
          "style": {
            "line-style": "solid",
            "width": 3
          }
        },
        "38": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "29"
          },
          "value": 0.08743169398907104,
          "constraint": "PointOnPath",
          "label": "A",
          "style": {
            "hidden": true
          }
        },
        "39": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "38",
            "distance": "25"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "40": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "38",
            "radius": "19"
          },
          "constraint": "CircleByRadius"
        },
        "41": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "circle": "40"
          },
          "constraint": "CircleInterior",
          "style": {
            "hidden": true,
            "color": "black",
            "layerOrder": 8
          }
        },
        "42": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "source": "41",
            "blue": "11",
            "green": "10",
            "red": "9"
          },
          "colorRange": "ReflectToRange",
          "colorModel": "TrivariateRGB",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeTrivariate",
          "style": {
            "color": "red",
            "layerOrder": 9
          }
        },
        "43": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 16,
              "y": 100
            }
          },
          "textMFS": "<T'+'>",
          "style": {
            "font-weight": "normal",
            "text-decoration": "none",
            "selectable": false
          }
        },
        "44": {
          "kind": "Map",
          "genus": "IterateMap",
          "parents": {
            "0": "39",
            "1": "40",
            "2": "41",
            "3": "42",
            "preimage0": "38",
            "map0image0": "39",
            "depth": "23"
          },
          "constraint": "IterateMapByParametricDepth",
          "rerandomizePointsOnPaths": false,
          "finalIterationOnly": false
        },
        "45": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "40",
            "map": "44"
          },
          "constraint": "IterateImage",
          "style": {
            "line-style": "solid",
            "width": 3
          }
        },
        "46": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "42",
            "map": "44"
          },
          "constraint": "IterateImage",
          "style": {
            "opacity": 0.49999237060546875,
            "layerOrder": 13
          }
        },
        "47": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "7"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 791,
              "y": 295
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-@0",
          "latentVisibility": true,
          "label": "m[3]",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "48": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "8"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 972,
              "y": 298
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-@0",
          "latentVisibility": true,
          "label": "m[3]",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "49": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "7",
            "1": "8"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 792,
              "y": 356
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(sgn(@0*@1))",
          "latentVisibility": true,
          "label": "both +ve",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "50": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "47",
            "1": "48"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 792,
              "y": 373
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(sgn(@0*@1))",
          "latentVisibility": true,
          "label": "both -ve",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "51": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "49",
            "1": "50"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 792,
              "y": 390
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "sgn(abs(sgn(@0))+abs(sgn(@1)))",
          "latentVisibility": true,
          "label": "same sign",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "52": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "51"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 792,
              "y": 407
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-@0",
          "latentVisibility": true,
          "label": "m[5]",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "53": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "4"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 792,
              "y": 424
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(@0)",
          "latentVisibility": true,
          "label": "m[4]",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "54": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "5"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 792,
              "y": 445
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(@0)",
          "latentVisibility": true,
          "label": "m[4]",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "55": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "53",
            "1": "54"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 520,
              "y": 390
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(.5+sgn(@0-@1)))/2",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "56": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "55"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 520,
              "y": 390
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-@0",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "57": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "55",
            "1": "53",
            "2": "56",
            "3": "54"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 792,
              "y": 466
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*@1+@2*@3",
          "latentVisibility": true,
          "label": "min (m[4], m[4])",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "58": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "52",
            "1": "57"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 792,
              "y": 488
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*@1",
          "latentVisibility": true,
          "label": "# zeros",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "59": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "58",
            "1": "25"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 792,
              "y": 505
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*@1",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "60": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "25",
            "1": "6",
            "2": "19"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 792,
              "y": 546
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(@0-2*@1)/2+@2",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "61": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "38",
            "distance": "60"
          },
          "angle": 3.1415926535897865,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "62": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "30",
            "distance": "60"
          },
          "angle": 3.1415926535897865,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "63": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 792,
              "y": 323
            }
          },
          "textMFS": "<VL<T'determine # of zeros'><T'draw the yellow shade ot cover zeros'>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "font-weight": "normal",
            "text-decoration": "none",
            "color": "rgb(255,128,0)",
            "selectable": false
          }
        },
        "64": {
          "kind": "Expression",
          "genus": "DistanceParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 792,
              "y": 522
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "0.8 cm",
          "latentVisibility": true,
          "label": "vert shift",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 1,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true,
            "selectable": false
          }
        },
        "65": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "62",
            "distance": "64"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "66": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "65",
            "distance": "59"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "67": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "61",
            "distance": "64"
          },
          "angle": -1.5707963267949,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "68": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "67",
            "distance": "59"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "69": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "0": "68",
            "1": "66",
            "2": "65",
            "3": "67"
          },
          "constraint": "PolygonFromPoints",
          "style": {
            "layerOrder": 14
          }
        },
        "70": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 791,
              "y": 24
            }
          },
          "textMFS": "<VL<T'generate first integer'><T'set up RGB colouring'><T'calculations for iteration'>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "font-weight": "normal",
            "text-decoration": "none",
            "color": "rgb(255,128,0)",
            "selectable": false
          }
        },
        "71": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 966,
              "y": 22
            }
          },
          "textMFS": "<VL<T'generate first integer'><T'set up RGB colouring'><T'calculations for iteration'>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "font-weight": "normal",
            "text-decoration": "none",
            "color": "rgb(255,128,0)",
            "selectable": false
          }
        },
        "72": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "4",
            "1": "5"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1008,
              "y": 334
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0+@1",
          "latentVisibility": true,
          "label": "m[6]",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "73": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "4",
            "1": "5",
            "2": "72"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 443,
              "y": 192
            }
          },
          "textMFS": "<H<?1xC0001<H<T'3'>>><T' + ('><?1xC0002<H<T'7'>>><T') = '><?1xC0003<H<T'10'>>>>",
          "style": {
            "font-weight": "normal",
            "text-decoration": "none",
            "selectable": false
          }
        },
        "74": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 9,
              "y": -17
            }
          },
          "textMFS": "<T'Adding Two Integers Consolidation'>",
          "style": {
            "font-size": 20,
            "selectable": false
          }
        },
        "75": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 24,
              "y": 239
            }
          },
          "textMFS": "<VL<SR1G1L1<T'Decide whether each sum would be positive or negative.'>><0><T'-405 + 506'><0><T'-216 - 465'><0><T'376 - 736'><0><T'415 - 234'><0><T'213 + 543'><0><T'-568 + 213'>>",
          "style": {
            "font-weight": "normal",
            "text-decoration": "none",
            "color": "green",
            "selectable": false
          }
        },
        "76": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "55",
            "1": "54",
            "2": "56",
            "3": "53"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 936,
              "y": 471
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*@1+@2*@3",
          "latentVisibility": true,
          "label": "max (m[4], m[4])",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "77": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "76",
            "1": "58"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 936,
              "y": 493
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0-@1",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "78": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "1",
            "1": "2",
            "2": "58",
            "3": "77"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 815,
              "y": 600
            }
          },
          "textMFS": "<VL<H<T'The sum of '><?1xC0001<H<T'3'>>><T' and '><?1xC0002<H<T'7'>>><T' will generate '><?1xC0003<H<T'0'>>><T' zero pairs leaving '><?1xC0004<H<T'7'>>><T' more '><SR1G1L100<T'blue '>><T'counters.'>>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "font-weight": "normal",
            "text-decoration": "none",
            "selectable": false
          }
        },
        "79": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "72"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1168,
              "y": 408
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1+sgn(-.5+sgn(@0)))/2",
          "latentVisibility": true,
          "label": "m[6]>0",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "80": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "72"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1168,
              "y": 431
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(.5+sgn(@0)))/2",
          "latentVisibility": true,
          "label": "m[6]<0",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "81": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "72"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1168,
              "y": 454
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-abs(sgn(@0))",
          "latentVisibility": true,
          "label": "m[6]=0",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "82": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "1",
            "1": "2",
            "2": "58",
            "3": "77"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 815,
              "y": 620
            }
          },
          "textMFS": "<VL<H<T'The sum of '><?1xC0001<H<T'3'>>><T' and '><?1xC0002<H<T'7'>>><T' will generate '><?1xC0003<H<T'0'>>><T' zero pairs leaving '><?1xC0004<H<T'7'>>><T' more '><SR100G1L1<T'red '>><T'counters.'>>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "font-weight": "normal",
            "text-decoration": "none",
            "selectable": false
          }
        },
        "83": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "1",
            "1": "2",
            "2": "58"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 815,
              "y": 640
            }
          },
          "textMFS": "<VL<H<T'The sum of '><?1xC0001<H<T'3'>>><T' and '><?1xC0002<H<T'7'>>><T' will generate '><?1xC0003<H<T'0'>>><T' zero pairs leaving no unpaired counters.'>>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "font-weight": "normal",
            "text-decoration": "none",
            "selectable": false
          }
        },
        "84": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "80"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 375,
              "y": 605
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1/@0*2",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "85": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 390,
              "y": 628
            }
          },
          "style": {
            "hidden": true
          }
        },
        "86": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "85"
          },
          "angle": -1.5707963267949,
          "distance": 14.173228346456693,
          "constraint": "TranslateFixDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "87": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "86",
            "center": "85",
            "measure": "84"
          },
          "constraint": "DilateMeasureFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "88": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "79"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 375,
              "y": 605
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1/@0*2",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "89": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "86",
            "center": "85",
            "measure": "88"
          },
          "constraint": "DilateMeasureFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "90": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "81"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 375,
              "y": 605
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1/@0*2",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "91": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "86",
            "center": "85",
            "measure": "90"
          },
          "constraint": "DilateMeasureFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "92": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "72"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1008,
              "y": 352
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(@0)",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "93": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "1",
            "1": "2",
            "2": "92"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 815,
              "y": 659
            }
          },
          "textMFS": "<VL<H<T'The sum of '><?1xC0001<H<T'3'>>><T' and '><?1xC0002<H<T'7'>>><T' does not generate zero pairs so there are a total of '><?1xC0003<H<T'10'>>><T' '><SR100G1L1<T'red '>><T'counters.'>>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "font-weight": "normal",
            "text-decoration": "none",
            "selectable": false
          }
        },
        "94": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "1",
            "1": "2",
            "2": "92"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 815,
              "y": 679
            }
          },
          "textMFS": "<VL<H<T'The sum of '><?1xC0001<H<T'3'>>><T' and '><?1xC0002<H<T'7'>>><T' does not generate zero pairs so there are a total of '><?1xC0003<H<T'10'>>><T' '><SR1G1L100<T'blue '>><T'counters.'>>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "font-weight": "normal",
            "text-decoration": "none",
            "selectable": false
          }
        },
        "95": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "49"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1131,
              "y": 526
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1/@0*2",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "96": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "50"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1131,
              "y": 526
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1/@0*2",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "97": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "49"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1019,
              "y": 394
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-@0",
          "latentVisibility": true,
          "label": "m[7]",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "98": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "50"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1019,
              "y": 411
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-@0",
          "latentVisibility": true,
          "label": "m[7]",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "99": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "97",
            "1": "79"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1128,
              "y": 497
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(sgn(@0*@1))",
          "latentVisibility": true,
          "label": "(m[7])^(m[6]>0)",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "100": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "98",
            "1": "80"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1128,
              "y": 519
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(sgn(@0*@1))",
          "latentVisibility": true,
          "label": "(m[7])^(m[6]<0)",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "101": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "99"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1146,
              "y": 538
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1/@0*2",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "102": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "100"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1146,
              "y": 538
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1/@0*2",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "103": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 24,
              "y": 64
            }
          },
          "style": {
            "hidden": true
          }
        },
        "104": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 663,
              "y": 64
            }
          },
          "style": {
            "hidden": true
          }
        },
        "105": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "103",
            "p1": "104"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "106": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1223,
              "y": 500
            }
          },
          "textMFS": "<VL<T'diff signs and greater than 0'>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "font-weight": "normal",
            "text-decoration": "none",
            "color": "rgb(255,128,0)",
            "selectable": false
          }
        },
        "107": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1223,
              "y": 519
            }
          },
          "textMFS": "<VL<T'diff signs and less than 0'>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "font-weight": "normal",
            "text-decoration": "none",
            "color": "rgb(255,128,0)",
            "selectable": false
          }
        },
        "108": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1226,
              "y": 405
            }
          },
          "textMFS": "<VL<T'sum +ve'>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "font-weight": "normal",
            "text-decoration": "none",
            "color": "rgb(255,128,0)",
            "selectable": false
          }
        },
        "109": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1220,
              "y": 428
            }
          },
          "textMFS": "<VL<T'sum -ve'>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "font-weight": "normal",
            "text-decoration": "none",
            "color": "rgb(255,128,0)",
            "selectable": false
          }
        },
        "110": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1228,
              "y": 453
            }
          },
          "textMFS": "<VL<T'sum 0'>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "font-weight": "normal",
            "text-decoration": "none",
            "color": "rgb(255,128,0)",
            "selectable": false
          }
        },
        "111": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "105"
          },
          "value": 0.41471048513302033,
          "constraint": "PointOnPath",
          "style": {
            "hidden": true
          }
        },
        "112": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "111"
          },
          "angle": -1.5707963267949,
          "distance": 14.173228346456693,
          "constraint": "TranslateFixDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "113": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "112",
            "center": "111",
            "measure": "102"
          },
          "constraint": "DilateMeasureFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "114": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "113",
            "text": "78"
          },
          "constraint": "Pegged",
          "style": {
            "font-size": 16,
            "font-weight": "normal",
            "text-decoration": "none",
            "selectable": false
          }
        },
        "115": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "105"
          },
          "value": 0.41784037558685444,
          "constraint": "PointOnPath",
          "style": {
            "hidden": true
          }
        },
        "116": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "115"
          },
          "angle": -1.5707963267949,
          "distance": 14.173228346456693,
          "constraint": "TranslateFixDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "117": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "116",
            "center": "115",
            "measure": "101"
          },
          "constraint": "DilateMeasureFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "118": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "117",
            "text": "82"
          },
          "constraint": "Pegged",
          "style": {
            "font-size": 16,
            "font-weight": "normal",
            "text-decoration": "none",
            "selectable": false
          }
        },
        "119": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "105"
          },
          "value": 0.4131455399061033,
          "constraint": "PointOnPath",
          "style": {
            "hidden": true
          }
        },
        "120": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "119"
          },
          "angle": -1.5707963267949,
          "distance": 14.173228346456693,
          "constraint": "TranslateFixDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "121": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "120",
            "center": "119",
            "measure": "90"
          },
          "constraint": "DilateMeasureFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "122": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "121",
            "text": "83"
          },
          "constraint": "Pegged",
          "style": {
            "font-size": 16,
            "font-weight": "normal",
            "text-decoration": "none",
            "selectable": false
          }
        },
        "123": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "105"
          },
          "value": 0.5086071987480438,
          "constraint": "PointOnPath",
          "style": {
            "hidden": true
          }
        },
        "124": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "123"
          },
          "angle": -1.5707963267949,
          "distance": 14.173228346456693,
          "constraint": "TranslateFixDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "125": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "124",
            "center": "123",
            "measure": "95"
          },
          "constraint": "DilateMeasureFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "126": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "125",
            "text": "93"
          },
          "constraint": "Pegged",
          "style": {
            "font-size": 16,
            "font-weight": "normal",
            "text-decoration": "none",
            "selectable": false
          }
        },
        "127": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "105"
          },
          "value": 0.5070422535211268,
          "constraint": "PointOnPath",
          "style": {
            "hidden": true
          }
        },
        "128": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "127"
          },
          "angle": -1.5707963267949,
          "distance": 14.173228346456693,
          "constraint": "TranslateFixDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "129": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "128",
            "center": "127",
            "measure": "96"
          },
          "constraint": "DilateMeasureFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "130": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "129",
            "text": "94"
          },
          "constraint": "Pegged",
          "style": {
            "font-size": 16,
            "font-weight": "normal",
            "text-decoration": "none",
            "selectable": false
          }
        },
        "131": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "3",
            "1": "4",
            "2": "5",
            "3": "6",
            "4": "7",
            "5": "8",
            "6": "9",
            "7": "10",
            "8": "11",
            "9": "12",
            "10": "13",
            "11": "14",
            "12": "15",
            "13": "16",
            "14": "19",
            "15": "20",
            "16": "21",
            "17": "22",
            "18": "23",
            "19": "24",
            "20": "25",
            "21": "26",
            "22": "47",
            "23": "48",
            "24": "49",
            "25": "50",
            "26": "51",
            "27": "52",
            "28": "53",
            "29": "54",
            "30": "57",
            "31": "58",
            "32": "59",
            "33": "60",
            "34": "63",
            "35": "64",
            "36": "70",
            "37": "71",
            "38": "72",
            "39": "76",
            "40": "77",
            "41": "78",
            "42": "79",
            "43": "80",
            "44": "81",
            "45": "82",
            "46": "83",
            "47": "92",
            "48": "93",
            "49": "94",
            "50": "97",
            "51": "98",
            "52": "99",
            "53": "100",
            "54": "106",
            "55": "107",
            "56": "108",
            "57": "109",
            "58": "110"
          },
          "geom": {
            "loc": {
              "x": 1229,
              "y": 5
            }
          },
          "label": "Show Objects",
          "style": {
            "label": {
              "font-size": 10
            },
            "selectable": false
          },
          "constraint": "ActionButtonToggleHideShow",
          "messages": [
            "Hide Objects",
            "Show Objects"
          ],
          "shouldAutogenerateLabel": true
        },
        "132": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 134,
              "y": 291
            }
          },
          "textMFS": "<VL<T'positive; since the positive integer has the greater magnitude'><0><T'negative; since both integers are negative'><0><T'negative; since the negative integer has the greater magnitude'><0><T'positive; since the positive integer has the greater magnitude'><0><T'positve; since both integers are positive'><0><T'negative; since the negative integer has the greater magnitude'>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-weight": "normal",
            "text-decoration": "none",
            "color": "fuchsia",
            "selectable": false
          }
        },
        "133": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "132"
          },
          "geom": {
            "loc": {
              "x": 516,
              "y": 248
            }
          },
          "label": "Show Answer",
          "style": {
            "color": "rgb(160,160,160)",
            "selectable": false
          },
          "constraint": "ActionButtonToggleHideShow",
          "messages": [
            "Hide Answer",
            "Show Answer"
          ]
        },
        "134": {
          "kind": "Button",
          "genus": "Action",
          "geom": {
            "loc": {
              "x": 751,
              "y": -8
            }
          },
          "label": "Next Page",
          "style": {
            "color": "rgb(160,160,160)",
            "selectable": false
          },
          "constraint": "ActionButtonLinkPage",
          "messages": [
            "Next Page"
          ],
          "pageId": "7"
        },
        "135": {
          "kind": "Button",
          "genus": "Action",
          "geom": {
            "loc": {
              "x": 654,
              "y": -7
            }
          },
          "label": "Previous Page",
          "style": {
            "color": "rgb(160,160,160)",
            "selectable": false
          },
          "constraint": "ActionButtonLinkPage",
          "messages": [
            "Previous Page"
          ],
          "pageId": "5"
        }
      }
    },
    {
      "metadata": {
        "title": "7",
        "id": "7",
        "sketchRect": {
          "top": -28,
          "left": -2,
          "bottom": 663,
          "right": 1131
        }
      },
      "preferences": {
        "units": {
          "length": "cm",
          "angle": "deg"
        },
        "precision": {
          "length": 2,
          "angle": 2,
          "scalar": 2
        },
        "colorableComponents": {
          "Points": {
            "color": "rgb(0,0,252)"
          },
          "Straights": {
            "color": "black"
          },
          "Curves": {
            "color": "black"
          },
          "Interior": {
            "color": "green"
          },
          "Plot": {
            "color": "rgb(0,125,0)"
          },
          "PointLocus": {
            "color": "rgb(121,0,0)"
          },
          "Selection": {
            "color": "rgb(188,0,188)"
          },
          "Background": {
            "color": "rgb(248,248,248)"
          },
          "ActionButton": {
            "color": "rgb(160,160,160)"
          },
          "Axis": {
            "color": "rgb(179,179,179)"
          }
        },
        "text": {
          "mathItalicization": true,
          "textTypes": {
            "Label": {
              "font-family": "\"Comic Sans MS\", sans-serif",
              "font-size": 20,
              "font-weight": "normal"
            },
            "Caption": {
              "font-family": "\"Comic Sans MS\", sans-serif",
              "font-size": 18,
              "color": "green"
            },
            "Measurement": {
              "font-family": "\"Comic Sans MS\", sans-serif",
              "font-size": 16
            },
            "Action": {
              "label": {
                "font-family": "\"Comic Sans MS\", sans-serif",
                "font-size": 12
              }
            },
            "Table": {
              "font-family": "\"Comic Sans MS\", sans-serif",
              "font-size": 16
            },
            "AxisTicksAndOptionalLabel": {
              "font-family": "\"Comic Sans MS\", sans-serif",
              "font-size": 28
            }
          }
        },
        "limitScrolling": true
      },
      "objects": {
        "1": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 508,
              "y": 502
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "-5.967635120700705",
          "label": "first integer",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true,
            "selectable": false
          }
        },
        "2": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 508,
              "y": 535
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "4.607379375591297",
          "label": "second integer",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true,
            "selectable": false
          }
        },
        "3": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "1",
            "1": "2"
          },
          "geom": {
            "loc": {
              "x": 1181,
              "y": 187
            }
          },
          "latentVisibility": true,
          "label": "New Question",
          "style": {
            "hidden": true,
            "label": {
              "font-size": 10
            },
            "selectable": false
          },
          "constraint": "ActionButtonAnimate",
          "messages": [
            "New Question"
          ],
          "animationStates": [
            {
              "rate": 1,
              "timeInterval": 1,
              "repeat": false,
              "motionType": "random",
              "lowerParamBound": -10.5,
              "upperParamBound": 10.5,
              "discrete": false
            },
            {
              "rate": 1,
              "timeInterval": 1,
              "repeat": false,
              "motionType": "random",
              "lowerParamBound": -10,
              "upperParamBound": 10,
              "discrete": false
            }
          ]
        },
        "4": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "1"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 791,
              "y": 95
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "round(@0)",
          "latentVisibility": true,
          "label": "m[1]",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "5": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "2"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 966,
              "y": 93
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "round(@0)",
          "latentVisibility": true,
          "label": "m[2]",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "6": {
          "kind": "Expression",
          "genus": "DistanceParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1154,
              "y": 74
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "0.8 cm",
          "latentVisibility": true,
          "label": "rad tile",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true,
            "selectable": false
          }
        },
        "7": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "4"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 791,
              "y": 113
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1+sgn(-.5+sgn(@0)))/2",
          "latentVisibility": true,
          "label": "1st integer >0",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "8": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "5"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 966,
              "y": 111
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1+sgn(-.5+sgn(@0)))/2",
          "latentVisibility": true,
          "label": "2nd integer >0",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "9": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "7"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 791,
              "y": 130
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*255",
          "latentVisibility": true,
          "label": "1st int red",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "10": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {},
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 791,
              "y": 147
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "0*0",
          "latentVisibility": true,
          "label": "1st int green",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "11": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "7"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 791,
              "y": 164
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-@0)*255",
          "latentVisibility": true,
          "label": "1st int blue",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "12": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "8"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 966,
              "y": 129
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*255",
          "latentVisibility": true,
          "label": "2nd int red",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "13": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {},
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 966,
              "y": 146
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "0*0",
          "latentVisibility": true,
          "label": "2nd int green",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "14": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "8"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 966,
              "y": 163
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-@0)*255",
          "latentVisibility": true,
          "label": "2nd int blue",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "15": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "4"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 791,
              "y": 181
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-abs(sgn(@0))",
          "latentVisibility": true,
          "label": "m[1]=0",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "16": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "5"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 972,
              "y": 184
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-abs(sgn(@0))",
          "latentVisibility": true,
          "label": "m[2]=0",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "17": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "4"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 16,
              "y": 76
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0",
          "label": "1",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "noVisibleName",
            "selectable": false
          }
        },
        "18": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "5"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 16,
              "y": 128
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0",
          "label": "f",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "noVisibleName",
            "selectable": false
          }
        },
        "19": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "15",
            "1": "6"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 791,
              "y": 204
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-@0)*@1",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "20": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "16",
            "1": "6"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 972,
              "y": 207
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-@0)*@1",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "21": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "4"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 791,
              "y": 227
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(@0)",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "22": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "5"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 972,
              "y": 230
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(@0)",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "23": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "21"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 791,
              "y": 249
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0-1",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "24": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "22"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 972,
              "y": 252
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0-1",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "25": {
          "kind": "Expression",
          "genus": "DistanceParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 791,
              "y": 271
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1.9 cm",
          "latentVisibility": true,
          "label": "spacing",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true,
            "selectable": false
          }
        },
        "26": {
          "kind": "Expression",
          "genus": "DistanceParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 972,
              "y": 274
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1.9 cm",
          "latentVisibility": true,
          "label": "spacing",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true,
            "selectable": false
          }
        },
        "27": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 37,
              "y": 58
            }
          },
          "style": {
            "hidden": true
          }
        },
        "28": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 37,
              "y": 424
            }
          },
          "style": {
            "hidden": true
          }
        },
        "29": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "27",
            "p1": "28"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "color": "rgb(0,126,0)",
            "width": 1
          }
        },
        "30": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "29"
          },
          "value": 0.22950819672131148,
          "constraint": "PointOnPath",
          "label": "B",
          "style": {
            "hidden": true
          }
        },
        "31": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "30",
            "distance": "26"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "32": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "30",
            "radius": "20"
          },
          "constraint": "CircleByRadius"
        },
        "33": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "circle": "32"
          },
          "constraint": "CircleInterior",
          "style": {
            "hidden": true,
            "color": "rgb(255,128,0)",
            "layerOrder": 6
          }
        },
        "34": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "source": "33",
            "blue": "14",
            "green": "13",
            "red": "12"
          },
          "colorRange": "ReflectToRange",
          "colorModel": "TrivariateRGB",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeTrivariate",
          "style": {
            "color": "red",
            "layerOrder": 7
          }
        },
        "35": {
          "kind": "Map",
          "genus": "IterateMap",
          "parents": {
            "0": "32",
            "1": "33",
            "2": "34",
            "3": "31",
            "preimage0": "30",
            "map0image0": "31",
            "depth": "24"
          },
          "constraint": "IterateMapByParametricDepth",
          "rerandomizePointsOnPaths": false,
          "finalIterationOnly": false
        },
        "36": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "34",
            "map": "35"
          },
          "constraint": "IterateImage",
          "style": {
            "opacity": 0.49999237060546875,
            "layerOrder": 12
          }
        },
        "37": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "32",
            "map": "35"
          },
          "constraint": "IterateImage",
          "style": {
            "line-style": "solid",
            "width": 3
          }
        },
        "38": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "29"
          },
          "value": 0.08743169398907104,
          "constraint": "PointOnPath",
          "label": "A",
          "style": {
            "hidden": true
          }
        },
        "39": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "38",
            "distance": "25"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "40": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "38",
            "radius": "19"
          },
          "constraint": "CircleByRadius"
        },
        "41": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "circle": "40"
          },
          "constraint": "CircleInterior",
          "style": {
            "hidden": true,
            "color": "black",
            "layerOrder": 8
          }
        },
        "42": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "source": "41",
            "blue": "11",
            "green": "10",
            "red": "9"
          },
          "colorRange": "ReflectToRange",
          "colorModel": "TrivariateRGB",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeTrivariate",
          "style": {
            "color": "blue",
            "layerOrder": 9
          }
        },
        "43": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 16,
              "y": 100
            }
          },
          "textMFS": "<T'+'>",
          "style": {
            "hidden": true,
            "color": "black",
            "selectable": false
          }
        },
        "44": {
          "kind": "Map",
          "genus": "IterateMap",
          "parents": {
            "0": "39",
            "1": "40",
            "2": "41",
            "3": "42",
            "preimage0": "38",
            "map0image0": "39",
            "depth": "23"
          },
          "constraint": "IterateMapByParametricDepth",
          "rerandomizePointsOnPaths": false,
          "finalIterationOnly": false
        },
        "45": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "40",
            "map": "44"
          },
          "constraint": "IterateImage",
          "style": {
            "line-style": "solid",
            "width": 3
          }
        },
        "46": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "42",
            "map": "44"
          },
          "constraint": "IterateImage",
          "style": {
            "opacity": 0.49999237060546875,
            "layerOrder": 13
          }
        },
        "47": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "7"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 791,
              "y": 295
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-@0",
          "latentVisibility": true,
          "label": "m[3]",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "48": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "8"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 972,
              "y": 298
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-@0",
          "latentVisibility": true,
          "label": "m[3]",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "49": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "7",
            "1": "8"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 792,
              "y": 356
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(sgn(@0*@1))",
          "latentVisibility": true,
          "label": "both +ve",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "50": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "47",
            "1": "48"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 792,
              "y": 373
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(sgn(@0*@1))",
          "latentVisibility": true,
          "label": "both -ve",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "51": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "49",
            "1": "50"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 792,
              "y": 390
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "sgn(abs(sgn(@0))+abs(sgn(@1)))",
          "latentVisibility": true,
          "label": "same sign",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "52": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "51"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 792,
              "y": 407
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-@0",
          "latentVisibility": true,
          "label": "m[5]",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "53": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "4"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 792,
              "y": 424
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(@0)",
          "latentVisibility": true,
          "label": "m[4]",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "54": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "5"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 792,
              "y": 445
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(@0)",
          "latentVisibility": true,
          "label": "m[4]",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "55": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "53",
            "1": "54"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 520,
              "y": 390
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(.5+sgn(@0-@1)))/2",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "56": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "55"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 520,
              "y": 390
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-@0",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "57": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "55",
            "1": "53",
            "2": "56",
            "3": "54"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 792,
              "y": 466
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*@1+@2*@3",
          "latentVisibility": true,
          "label": "min (m[4], m[4])",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "58": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "52",
            "1": "57"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 792,
              "y": 488
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*@1",
          "latentVisibility": true,
          "label": "# zeros",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "59": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "58",
            "1": "25"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 792,
              "y": 505
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*@1",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "60": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "25",
            "1": "6",
            "2": "19"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 792,
              "y": 546
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(@0-2*@1)/2+@2",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "61": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "38",
            "distance": "60"
          },
          "angle": 3.1415926535897865,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "62": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "30",
            "distance": "60"
          },
          "angle": 3.1415926535897865,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "63": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 792,
              "y": 323
            }
          },
          "textMFS": "<VL<T'determine # of zeros'><T'draw the yellow shade ot cover zeros'>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "color": "rgb(255,128,0)",
            "selectable": false
          }
        },
        "64": {
          "kind": "Expression",
          "genus": "DistanceParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 792,
              "y": 522
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "0.8 cm",
          "latentVisibility": true,
          "label": "vert shift",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 1,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true,
            "selectable": false
          }
        },
        "65": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "62",
            "distance": "64"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "66": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "65",
            "distance": "59"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "67": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "61",
            "distance": "64"
          },
          "angle": -1.5707963267949,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "68": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "67",
            "distance": "59"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "69": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "0": "68",
            "1": "66",
            "2": "65",
            "3": "67"
          },
          "constraint": "PolygonFromPoints",
          "style": {
            "hidden": true,
            "color": "yellow",
            "layerOrder": 14
          }
        },
        "70": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 791,
              "y": 24
            }
          },
          "textMFS": "<VL<T'generate first integer'><T'set up RGB colouring'><T'calculations for iteration'>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "color": "rgb(255,128,0)",
            "selectable": false
          }
        },
        "71": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 966,
              "y": 22
            }
          },
          "textMFS": "<VL<T'generate first integer'><T'set up RGB colouring'><T'calculations for iteration'>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "color": "rgb(255,128,0)",
            "selectable": false
          }
        },
        "72": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "4",
            "1": "5"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1008,
              "y": 334
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0+@1",
          "latentVisibility": true,
          "label": "m[6]",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "73": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "4",
            "1": "5"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 122,
              "y": 181
            }
          },
          "textMFS": "<VL<H<?1xC0001<H<T'\u20136'>>><T' + ('><?1xC0002<H<T'5'>>><T')'>>>",
          "style": {
            "color": "black",
            "selectable": false
          }
        },
        "74": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 12,
              "y": -20
            }
          },
          "textMFS": "<T'Adding Two Integers Using Consolidation - Chart'>",
          "style": {
            "font-size": 20,
            "text-decoration": "underline",
            "color": "black",
            "selectable": false
          }
        },
        "75": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 26,
              "y": 232
            }
          },
          "textMFS": "<VL<T'Use the New Sum button to generate questions.'><T'In your notebook, complete a chart for at least 5 pairs of integers. '><T'Check your answer.'>>",
          "style": {
            "font-size": 16,
            "color": "black",
            "selectable": false
          }
        },
        "76": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "55",
            "1": "54",
            "2": "56",
            "3": "53"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 936,
              "y": 471
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*@1+@2*@3",
          "latentVisibility": true,
          "label": "max (m[4], m[4])",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "77": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "76",
            "1": "58"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 936,
              "y": 493
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0-@1",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "78": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "1",
            "1": "2",
            "2": "58",
            "3": "77"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 815,
              "y": 600
            }
          },
          "textMFS": "<VL<H<T'The sum of '><?xC0001><T' and '><?xC0002><T' will generate '><?xC0003><T' zero pairs leaving '><?xC0004><T' more '><SR1G1L100<T'blue '>><T'counters.'>>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "color": "black",
            "selectable": false
          }
        },
        "79": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "72"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1168,
              "y": 408
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1+sgn(-.5+sgn(@0)))/2",
          "latentVisibility": true,
          "label": "m[6]>0",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "80": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "72"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1168,
              "y": 431
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(.5+sgn(@0)))/2",
          "latentVisibility": true,
          "label": "m[6]<0",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "81": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "72"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1168,
              "y": 454
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-abs(sgn(@0))",
          "latentVisibility": true,
          "label": "m[6]=0",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "82": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "1",
            "1": "2",
            "2": "58",
            "3": "77"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 815,
              "y": 620
            }
          },
          "textMFS": "<VL<H<T'The sum of '><?xC0001><T' and '><?xC0002><T' will generate '><?xC0003><T' zero pairs leaving '><?xC0004><T' more '><SR100G1L1<T'red '>><T'counters.'>>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "color": "black",
            "selectable": false
          }
        },
        "83": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "1",
            "1": "2",
            "2": "58"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 815,
              "y": 640
            }
          },
          "textMFS": "<VL<H<T'The sum of '><?xC0001><T' and '><?xC0002><T' will generate '><?xC0003><T' zero pairs leaving no unpaired counters.'>>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "color": "black",
            "selectable": false
          }
        },
        "84": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "80"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 375,
              "y": 605
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1/@0*2",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "85": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 390,
              "y": 628
            }
          },
          "style": {
            "hidden": true
          }
        },
        "86": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "85"
          },
          "angle": -1.5707963267949,
          "distance": 14.173228346456693,
          "constraint": "TranslateFixDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "87": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "86",
            "center": "85",
            "measure": "84"
          },
          "constraint": "DilateMeasureFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "88": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "79"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 375,
              "y": 605
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1/@0*2",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "89": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "86",
            "center": "85",
            "measure": "88"
          },
          "constraint": "DilateMeasureFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "90": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "81"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 375,
              "y": 605
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1/@0*2",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "91": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "86",
            "center": "85",
            "measure": "90"
          },
          "constraint": "DilateMeasureFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "92": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "72"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1008,
              "y": 352
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(@0)",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "93": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "1",
            "1": "2",
            "2": "92"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 815,
              "y": 659
            }
          },
          "textMFS": "<VL<H<T'The sum of '><?xC0001><T' and '><?xC0002><T' does not generate zero pairs so there are a total of '><?xC0003><T' '><SR100G1L1<T'red '>><T'counters.'>>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "color": "black",
            "selectable": false
          }
        },
        "94": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "1",
            "1": "2",
            "2": "92"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 815,
              "y": 679
            }
          },
          "textMFS": "<VL<H<T'The sum of '><?xC0001><T' and '><?xC0002><T' does not generate zero pairs so there are a total of '><?xC0003><T' '><SR1G1L100<T'blue '>><T'counters.'>>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "color": "black",
            "selectable": false
          }
        },
        "95": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "49"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1131,
              "y": 526
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1/@0*2",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "96": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "50"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1131,
              "y": 526
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1/@0*2",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "97": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "49"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1019,
              "y": 394
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-@0",
          "latentVisibility": true,
          "label": "m[7]",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "98": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "50"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1019,
              "y": 411
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-@0",
          "latentVisibility": true,
          "label": "m[7]",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "99": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "97",
            "1": "79"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1128,
              "y": 497
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(sgn(@0*@1))",
          "latentVisibility": true,
          "label": "(m[7])^(m[6]>0)",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "100": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "98",
            "1": "80"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1128,
              "y": 519
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(sgn(@0*@1))",
          "latentVisibility": true,
          "label": "(m[7])^(m[6]<0)",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "101": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "99"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1146,
              "y": 538
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1/@0*2",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "102": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "100"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1146,
              "y": 538
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1/@0*2",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "103": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 24,
              "y": 64
            }
          },
          "style": {
            "hidden": true
          }
        },
        "104": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 663,
              "y": 64
            }
          },
          "style": {
            "hidden": true
          }
        },
        "105": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "103",
            "p1": "104"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "color": "rgb(0,126,0)",
            "width": 1
          }
        },
        "106": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1223,
              "y": 500
            }
          },
          "textMFS": "<VL<T'diff signs and greater than 0'>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "color": "rgb(255,128,0)",
            "selectable": false
          }
        },
        "107": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1223,
              "y": 519
            }
          },
          "textMFS": "<VL<T'diff signs and less than 0'>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "color": "rgb(255,128,0)",
            "selectable": false
          }
        },
        "108": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1226,
              "y": 405
            }
          },
          "textMFS": "<VL<T'sum +ve'>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "color": "rgb(255,128,0)",
            "selectable": false
          }
        },
        "109": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1220,
              "y": 428
            }
          },
          "textMFS": "<VL<T'sum -ve'>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "color": "rgb(255,128,0)",
            "selectable": false
          }
        },
        "110": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1228,
              "y": 453
            }
          },
          "textMFS": "<VL<T'sum 0'>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "color": "rgb(255,128,0)",
            "selectable": false
          }
        },
        "111": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "105"
          },
          "value": 0.4397496087636933,
          "constraint": "PointOnPath",
          "style": {
            "hidden": true
          }
        },
        "112": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "111"
          },
          "angle": -1.5707963267949,
          "distance": 14.173228346456693,
          "constraint": "TranslateFixDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "113": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "112",
            "center": "111",
            "measure": "102"
          },
          "constraint": "DilateMeasureFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "114": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "113",
            "text": "78"
          },
          "constraint": "Pegged",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 16,
            "color": "black",
            "selectable": false
          }
        },
        "115": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "105"
          },
          "value": 0.486697965571205,
          "constraint": "PointOnPath",
          "style": {
            "hidden": true
          }
        },
        "116": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "115"
          },
          "angle": -1.5707963267949,
          "distance": 14.173228346456693,
          "constraint": "TranslateFixDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "117": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "116",
            "center": "115",
            "measure": "101"
          },
          "constraint": "DilateMeasureFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "118": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "117",
            "text": "82"
          },
          "constraint": "Pegged",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "color": "black",
            "selectable": false
          }
        },
        "119": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "105"
          },
          "value": 0.4131455399061033,
          "constraint": "PointOnPath",
          "style": {
            "hidden": true
          }
        },
        "120": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "119"
          },
          "angle": -1.5707963267949,
          "distance": 14.173228346456693,
          "constraint": "TranslateFixDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "121": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "120",
            "center": "119",
            "measure": "90"
          },
          "constraint": "DilateMeasureFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "122": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "121",
            "text": "83"
          },
          "constraint": "Pegged",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 16,
            "color": "black",
            "selectable": false
          }
        },
        "123": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "105"
          },
          "value": 0.49139280125195617,
          "constraint": "PointOnPath",
          "style": {
            "hidden": true
          }
        },
        "124": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "123"
          },
          "angle": -1.5707963267949,
          "distance": 14.173228346456693,
          "constraint": "TranslateFixDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "125": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "124",
            "center": "123",
            "measure": "95"
          },
          "constraint": "DilateMeasureFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "126": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "125",
            "text": "93"
          },
          "constraint": "Pegged",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 16,
            "color": "black",
            "selectable": false
          }
        },
        "127": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "105"
          },
          "value": 0.5179968701095462,
          "constraint": "PointOnPath",
          "style": {
            "hidden": true
          }
        },
        "128": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "127"
          },
          "angle": -1.5707963267949,
          "distance": 14.173228346456693,
          "constraint": "TranslateFixDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "129": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "128",
            "center": "127",
            "measure": "96"
          },
          "constraint": "DilateMeasureFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "130": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "129",
            "text": "94"
          },
          "constraint": "Pegged",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 16,
            "color": "black",
            "selectable": false
          }
        },
        "131": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "3",
            "1": "4",
            "2": "5",
            "3": "6",
            "4": "7",
            "5": "8",
            "6": "9",
            "7": "10",
            "8": "11",
            "9": "12",
            "10": "13",
            "11": "14",
            "12": "15",
            "13": "16",
            "14": "19",
            "15": "20",
            "16": "21",
            "17": "22",
            "18": "23",
            "19": "24",
            "20": "25",
            "21": "26",
            "22": "47",
            "23": "48",
            "24": "49",
            "25": "50",
            "26": "51",
            "27": "52",
            "28": "53",
            "29": "54",
            "30": "57",
            "31": "58",
            "32": "59",
            "33": "60",
            "34": "63",
            "35": "64",
            "36": "70",
            "37": "71",
            "38": "72",
            "39": "76",
            "40": "77",
            "41": "78",
            "42": "79",
            "43": "80",
            "44": "81",
            "45": "82",
            "46": "83",
            "47": "92",
            "48": "93",
            "49": "94",
            "50": "97",
            "51": "98",
            "52": "99",
            "53": "100",
            "54": "106",
            "55": "107",
            "56": "108",
            "57": "109",
            "58": "110"
          },
          "geom": {
            "loc": {
              "x": 1303,
              "y": -7
            }
          },
          "label": "Show Objects",
          "style": {
            "color": "rgb(255,128,0)",
            "label": {
              "font-size": 10
            },
            "selectable": false
          },
          "constraint": "ActionButtonToggleHideShow",
          "messages": [
            "Hide Objects",
            "Show Objects"
          ],
          "shouldAutogenerateLabel": true
        },
        "132": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "72"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 199,
              "y": 182
            }
          },
          "textMFS": "<H<T'= '><?xC0001>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "color": "fuchsia",
            "selectable": false
          }
        },
        "133": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "132"
          },
          "geom": {
            "loc": {
              "x": 535,
              "y": 164
            }
          },
          "label": "Show Text",
          "style": {
            "hidden": true,
            "label": {
              "font-size": 10
            },
            "selectable": false
          },
          "constraint": "ActionButtonShow",
          "messages": [
            "Show Text",
            "Hide Text"
          ],
          "shouldAutogenerateLabel": true
        },
        "134": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "132"
          },
          "geom": {
            "loc": {
              "x": 610,
              "y": 165
            }
          },
          "label": "Hide Text",
          "style": {
            "hidden": true,
            "label": {
              "font-size": 10
            },
            "selectable": false
          },
          "constraint": "ActionButtonHide",
          "messages": [
            "Hide Text",
            "Show Text"
          ],
          "shouldAutogenerateLabel": true
        },
        "135": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "126"
          },
          "geom": {
            "loc": {
              "x": 535,
              "y": 184
            }
          },
          "label": "Show Text",
          "style": {
            "hidden": true,
            "label": {
              "font-size": 10
            },
            "selectable": false
          },
          "constraint": "ActionButtonShow",
          "messages": [
            "Show Text",
            "Hide Text"
          ],
          "shouldAutogenerateLabel": true
        },
        "136": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "126"
          },
          "geom": {
            "loc": {
              "x": 610,
              "y": 185
            }
          },
          "label": "Hide Text",
          "style": {
            "hidden": true,
            "label": {
              "font-size": 10
            },
            "selectable": false
          },
          "constraint": "ActionButtonHide",
          "messages": [
            "Hide Text",
            "Show Text"
          ],
          "shouldAutogenerateLabel": true
        },
        "137": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "118"
          },
          "geom": {
            "loc": {
              "x": 535,
              "y": 204
            }
          },
          "label": "Show Text",
          "style": {
            "hidden": true,
            "label": {
              "font-size": 10
            },
            "selectable": false
          },
          "constraint": "ActionButtonShow",
          "messages": [
            "Show Text",
            "Hide Text"
          ],
          "shouldAutogenerateLabel": true
        },
        "138": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "118"
          },
          "geom": {
            "loc": {
              "x": 610,
              "y": 205
            }
          },
          "label": "Hide Text",
          "style": {
            "hidden": true,
            "label": {
              "font-size": 10
            },
            "selectable": false
          },
          "constraint": "ActionButtonHide",
          "messages": [
            "Hide Text",
            "Show Text"
          ],
          "shouldAutogenerateLabel": true
        },
        "139": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "114"
          },
          "geom": {
            "loc": {
              "x": 535,
              "y": 224
            }
          },
          "label": "Show Text",
          "style": {
            "hidden": true,
            "label": {
              "font-size": 10
            },
            "selectable": false
          },
          "constraint": "ActionButtonShow",
          "messages": [
            "Show Text",
            "Hide Text"
          ],
          "shouldAutogenerateLabel": true
        },
        "140": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "114"
          },
          "geom": {
            "loc": {
              "x": 610,
              "y": 225
            }
          },
          "label": "Hide Text",
          "style": {
            "hidden": true,
            "label": {
              "font-size": 10
            },
            "selectable": false
          },
          "constraint": "ActionButtonHide",
          "messages": [
            "Hide Text",
            "Show Text"
          ],
          "shouldAutogenerateLabel": true
        },
        "141": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "122"
          },
          "geom": {
            "loc": {
              "x": 535,
              "y": 244
            }
          },
          "label": "Show Text",
          "style": {
            "hidden": true,
            "label": {
              "font-size": 10
            },
            "selectable": false
          },
          "constraint": "ActionButtonShow",
          "messages": [
            "Show Text",
            "Hide Text"
          ],
          "shouldAutogenerateLabel": true
        },
        "142": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "122"
          },
          "geom": {
            "loc": {
              "x": 610,
              "y": 245
            }
          },
          "label": "Hide Text",
          "style": {
            "hidden": true,
            "label": {
              "font-size": 10
            },
            "selectable": false
          },
          "constraint": "ActionButtonHide",
          "messages": [
            "Hide Text",
            "Show Text"
          ],
          "shouldAutogenerateLabel": true
        },
        "143": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "130"
          },
          "geom": {
            "loc": {
              "x": 610,
              "y": 265
            }
          },
          "label": "Hide Text",
          "style": {
            "hidden": true,
            "label": {
              "font-size": 10
            },
            "selectable": false
          },
          "constraint": "ActionButtonHide",
          "messages": [
            "Hide Text",
            "Show Text"
          ]
        },
        "144": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "130"
          },
          "geom": {
            "loc": {
              "x": 535,
              "y": 264
            }
          },
          "label": "Show Text",
          "style": {
            "hidden": true,
            "label": {
              "font-size": 10
            },
            "selectable": false
          },
          "constraint": "ActionButtonShow",
          "messages": [
            "Show Text",
            "Hide Text"
          ],
          "shouldAutogenerateLabel": true
        },
        "145": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "133",
            "1": "135",
            "2": "137",
            "3": "139",
            "4": "141",
            "5": "144"
          },
          "geom": {
            "loc": {
              "x": 269,
              "y": 189
            }
          },
          "label": "Show Sum",
          "constraint": "ActionButtonPresentSimultaneously",
          "messages": [
            "Show Sum"
          ],
          "style": {
            "selectable": false
          }
        },
        "146": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "134",
            "1": "136",
            "2": "138",
            "3": "140",
            "4": "142",
            "5": "143"
          },
          "geom": {
            "loc": {
              "x": 610,
              "y": 285
            }
          },
          "label": "Hide Sum",
          "style": {
            "hidden": true,
            "label": {
              "font-size": 10
            },
            "selectable": false
          },
          "constraint": "ActionButtonPresentSimultaneously",
          "messages": [
            "Hide Sum"
          ]
        },
        "147": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "146",
            "1": "3"
          },
          "geom": {
            "loc": {
              "x": 53,
              "y": 623
            }
          },
          "label": "New Sum",
          "style": {
            "hidden": true,
            "label": {
              "font-size": 10
            },
            "selectable": false
          },
          "constraint": "ActionButtonPresentSimultaneously",
          "messages": [
            "New Sum"
          ]
        },
        "148": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 296,
              "y": 488
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "2.438901944029054",
          "label": "first integer",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true,
            "selectable": false
          }
        },
        "149": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 499,
              "y": 488
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "-5.352381969664601",
          "label": "second integer",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true,
            "selectable": false
          }
        },
        "150": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 30,
              "y": 341
            }
          },
          "label": "I",
          "style": {
            "hidden": true,
            "label": {
              "showLabel": true,
              "labelOffsetX": -18,
              "labelOffsetY": -27
            }
          }
        },
        "151": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 750,
              "y": 341
            }
          },
          "label": "J",
          "style": {
            "hidden": true,
            "label": {
              "showLabel": true,
              "labelOffsetX": 5,
              "labelOffsetY": 8
            }
          }
        },
        "152": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 358,
              "y": 856
            }
          },
          "textMFS": "<T'full'>",
          "style": {
            "hidden": true,
            "font-size": 10,
            "color": "black",
            "selectable": false
          }
        },
        "153": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 444,
              "y": 426
            }
          },
          "style": {
            "hidden": true
          }
        },
        "154": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 361,
              "y": 875
            }
          },
          "textMFS": "<VL<T'1'>>",
          "style": {
            "hidden": true,
            "font-size": 14,
            "color": "black",
            "selectable": false
          }
        },
        "155": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 618,
              "y": 428
            }
          },
          "style": {
            "hidden": true
          }
        },
        "156": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 30,
              "y": 527
            }
          },
          "style": {
            "hidden": true
          }
        },
        "157": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 750,
              "y": 564
            }
          },
          "style": {
            "hidden": true
          }
        },
        "158": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 143,
              "y": 405
            }
          },
          "textMFS": "<VL<T'see'><T'above'><F1FxxFFFFFFFFx20x8x>>",
          "style": {
            "selectable": false
          }
        },
        "159": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 516,
              "y": 355
            }
          },
          "textMFS": "<T'Sum'>",
          "style": {
            "font-size": 16,
            "color": "black",
            "selectable": false
          }
        },
        "160": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 393,
              "y": 347
            }
          },
          "textMFS": "<VL<T'Zero Pairs'><T'Created'><F1FxxFFFFFFFFx20x8x>>",
          "style": {
            "font-size": 16,
            "color": "black",
            "selectable": false
          }
        },
        "161": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 309,
              "y": 346
            }
          },
          "textMFS": "<VL<T'Second'><T'Integer'><F1FxxFFFFFFFFx20x8x>>",
          "style": {
            "font-size": 16,
            "color": "black",
            "selectable": false
          }
        },
        "162": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 224,
              "y": 346
            }
          },
          "textMFS": "<VL<T'First'><T'Integer'><F1FxxFFFFFFFFx20x8x>>",
          "style": {
            "font-size": 16,
            "color": "black",
            "selectable": false
          }
        },
        "163": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 144,
              "y": 352
            }
          },
          "textMFS": "<T'Model '>",
          "style": {
            "font-size": 16,
            "color": "black",
            "selectable": false
          }
        },
        "164": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 36,
              "y": 355
            }
          },
          "textMFS": "<T'Question'>",
          "style": {
            "font-size": 16,
            "color": "black",
            "selectable": false
          }
        },
        "165": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "148"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 893,
              "y": 77
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "round(@0)",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "166": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "149"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1068,
              "y": 75
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "round(@0)",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "167": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "165"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 893,
              "y": 95
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1+sgn(-.5+sgn(@0)))/2",
          "label": "1st integer >0",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "168": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "166"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1068,
              "y": 93
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1+sgn(-.5+sgn(@0)))/2",
          "label": "2nd integer >0",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "169": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "165"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 893,
              "y": 209
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(@0)",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "170": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "166"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1074,
              "y": 212
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(@0)",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "171": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "167"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 893,
              "y": 277
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-@0",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "172": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "168"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1074,
              "y": 280
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-@0",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "173": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "167",
            "1": "168"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 894,
              "y": 338
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(sgn(@0*@1))",
          "label": "both +ve",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "174": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "171",
            "1": "172"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 894,
              "y": 355
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(sgn(@0*@1))",
          "label": "both -ve",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "175": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "165",
            "1": "166"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1110,
              "y": 316
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0-@1",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "176": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "173",
            "1": "174"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 918,
              "y": 593
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "sgn(abs(sgn(@0))+abs(sgn(@1)))",
          "label": "(both +ve)V(both -ve)",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "177": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "176"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1357,
              "y": 647
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-@0",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "178": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "170",
            "1": "169"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 942,
              "y": 620
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(-.5+sgn(@0-@1)))/2",
          "label": "mag[1] >= mag[2]",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "179": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "178"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1125,
              "y": 619
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-@0",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "180": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "176",
            "1": "178"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 890,
              "y": 648
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(sgn(@0*@1))",
          "label": "((both +ve)V(both -ve))^(mag[1] >= mag[2])",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "181": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "176",
            "1": "179"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1117,
              "y": 646
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(sgn(@0*@1))",
          "label": "((both +ve)V(both -ve))^(m[8])",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "182": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "180",
            "1": "181",
            "2": "170",
            "3": "169",
            "4": "177"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1132,
              "y": 701
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*0+@1*(@2-@3)+@4*@2",
          "label": "# zeros pairs",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "183": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "150",
            "p1": "151"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "line-style": "dashed"
          }
        },
        "184": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "4",
            "1": "5"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 43,
              "y": 414
            }
          },
          "textMFS": "<H<?1xC0001<H<T'\u20136'>>><?1xD0002<H<T' + '><H<T'5'>>>><T' '>>",
          "style": {
            "font-size": 20,
            "selectable": false
          }
        },
        "185": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "4"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 241,
              "y": 416
            }
          },
          "textMFS": "<?1xC0001<H<T'\u20136'>>>",
          "style": {
            "font-size": 20,
            "selectable": false
          }
        },
        "186": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "5"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 332,
              "y": 415
            }
          },
          "textMFS": "<?1xC0001<H<T'5'>>>",
          "style": {
            "font-size": 20,
            "selectable": false
          }
        },
        "187": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "72"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 521,
              "y": 414
            }
          },
          "textMFS": "<?1xC0001<H<T'\u20131'>>>",
          "style": {
            "font-size": 20,
            "selectable": false
          }
        },
        "188": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "182"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 361,
              "y": 904
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0",
          "label": "number zeros",
          "style": {
            "hidden": true,
            "font-size": 10,
            "color": "rgb(192,133,74)",
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "189": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "188"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 486,
              "y": 795
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-abs(sgn(@0))",
          "label": "number zeros=0",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "190": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "189"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 485,
              "y": 820
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-abs(sgn(@0))",
          "label": "\u00ac(number zeros=0)",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "191": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "188",
            "1": "170"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 485,
              "y": 873
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-abs(sgn(@0-@1))",
          "label": "number zeros=m[2]",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "192": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "190",
            "1": "191"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 490,
              "y": 895
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(sgn(@0*@1))",
          "label": "(\u00ac(number zeros=0))^(number zeros=m[2])",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "193": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "153"
          },
          "angle": -1.5707963267949,
          "distance": 14.173228346456693,
          "constraint": "TranslateFixDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "194": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "192"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 732,
              "y": 559
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1/@0*2",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "195": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "193",
            "center": "153",
            "measure": "194"
          },
          "constraint": "DilateMeasureFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "196": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "166"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 568,
              "y": 836
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(.5+sgn(@0)))/2",
          "label": "m[2]<0",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "197": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "190",
            "1": "196"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 493,
              "y": 961
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(sgn(@0*@1))",
          "label": "(\u00ac(number zeros=0))^(m[2]<0)",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "198": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "197"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 615,
              "y": 621
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1/@0*2",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "199": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "155"
          },
          "angle": -1.5707963267949,
          "distance": 14.173228346456693,
          "constraint": "TranslateFixDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "200": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "199",
            "center": "155",
            "measure": "198"
          },
          "constraint": "DilateMeasureFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "201": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "150",
            "p1": "156"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "202": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "201"
          },
          "value": 0.3225806451612903,
          "constraint": "PointOnPath",
          "label": "K",
          "style": {
            "hidden": true,
            "label": {
              "showLabel": true,
              "labelOffsetX": 5,
              "labelOffsetY": 8
            }
          }
        },
        "203": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "201"
          },
          "value": 0.6505376344086021,
          "constraint": "PointOnPath",
          "label": "L",
          "style": {
            "hidden": true,
            "label": {
              "showLabel": true,
              "labelOffsetX": -18,
              "labelOffsetY": -1
            }
          }
        },
        "204": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "151",
            "p1": "157"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "205": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "204"
          },
          "value": 0.26905829596412556,
          "constraint": "PointOnPath",
          "label": "M",
          "style": {
            "hidden": true,
            "label": {
              "showLabel": true,
              "labelOffsetX": 5,
              "labelOffsetY": 8
            }
          }
        },
        "206": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "204"
          },
          "value": 0.5426008968609866,
          "constraint": "PointOnPath",
          "label": "N",
          "style": {
            "hidden": true,
            "label": {
              "showLabel": true,
              "labelOffsetX": 3,
              "labelOffsetY": -1
            }
          }
        },
        "207": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "203",
            "p1": "206"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "line-style": "dashed"
          }
        },
        "208": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "203",
            "p1": "150"
          },
          "constraint": "Segment"
        },
        "209": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "206",
            "p1": "151"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true
          }
        },
        "210": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "183"
          },
          "value": 0.12985737180561793,
          "constraint": "PointOnPath",
          "style": {
            "hidden": true
          }
        },
        "211": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "207"
          },
          "value": 0.12985737180561793,
          "constraint": "PointOnPath",
          "style": {
            "hidden": true
          }
        },
        "212": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "210",
            "p1": "211"
          },
          "constraint": "Segment"
        },
        "213": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "183"
          },
          "value": 0.2602912579042306,
          "constraint": "PointOnPath",
          "style": {
            "hidden": true
          }
        },
        "214": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "207"
          },
          "value": 0.2602912579042306,
          "constraint": "PointOnPath",
          "style": {
            "hidden": true
          }
        },
        "215": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "213",
            "p1": "214"
          },
          "constraint": "Segment"
        },
        "216": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "183"
          },
          "value": 0.37391426959954877,
          "constraint": "PointOnPath",
          "style": {
            "hidden": true
          }
        },
        "217": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "207"
          },
          "value": 0.37391426959954877,
          "constraint": "PointOnPath",
          "style": {
            "hidden": true
          }
        },
        "218": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "216",
            "p1": "217"
          },
          "constraint": "Segment"
        },
        "219": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "183"
          },
          "value": 0.49706006768189515,
          "constraint": "PointOnPath",
          "style": {
            "hidden": true
          }
        },
        "220": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "207"
          },
          "value": 0.49706006768189515,
          "constraint": "PointOnPath",
          "style": {
            "hidden": true
          }
        },
        "221": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "219",
            "p1": "220"
          },
          "constraint": "Segment"
        },
        "222": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "183"
          },
          "value": 0.6370135363790186,
          "constraint": "PointOnPath",
          "style": {
            "hidden": true
          }
        },
        "223": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "207"
          },
          "value": 0.6370135363790186,
          "constraint": "PointOnPath",
          "style": {
            "hidden": true
          }
        },
        "224": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "222",
            "p1": "223"
          },
          "constraint": "Segment"
        },
        "225": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "183"
          },
          "value": 0.7619045796294186,
          "constraint": "PointOnPath",
          "style": {
            "hidden": true
          }
        },
        "226": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "207"
          },
          "value": 0.7619045796294186,
          "constraint": "PointOnPath",
          "style": {
            "hidden": true
          }
        },
        "227": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "225",
            "p1": "226"
          },
          "constraint": "Segment"
        },
        "228": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "183"
          },
          "value": 0.8703936599260448,
          "constraint": "PointOnPath",
          "style": {
            "hidden": true
          }
        },
        "229": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "207"
          },
          "value": 0.8703936599260448,
          "constraint": "PointOnPath",
          "style": {
            "hidden": true
          }
        },
        "230": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "225",
            "p1": "150"
          },
          "constraint": "Segment"
        },
        "231": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "226",
            "p1": "203"
          },
          "constraint": "Segment"
        },
        "232": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "202",
            "p1": "205"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "line-style": "dashed"
          }
        },
        "233": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "232",
            "line1": "209"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true
          }
        },
        "234": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "208",
            "line1": "232"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true
          }
        },
        "235": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "232",
            "line1": "227"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true
          }
        },
        "236": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "235",
            "p1": "234"
          },
          "constraint": "Segment"
        },
        "237": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "58"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 426,
              "y": 415
            }
          },
          "textMFS": "<?1xC0001<H<T'5'>>>",
          "style": {
            "font-size": 20,
            "selectable": false
          }
        },
        "238": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "0": "235",
            "1": "226",
            "2": "203",
            "3": "234"
          },
          "constraint": "PolygonFromPoints",
          "latentVisibility": true,
          "style": {
            "opacity": 1,
            "layerOrder": 15
          }
        },
        "239": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "238"
          },
          "geom": {
            "loc": {
              "x": 65,
              "y": 590
            }
          },
          "label": "Show Quadrilateral",
          "style": {
            "hidden": true,
            "label": {
              "font-size": 10
            },
            "selectable": false
          },
          "constraint": "ActionButtonShow",
          "messages": [
            "Show Quadrilateral",
            "Hide Quadrilateral"
          ],
          "shouldAutogenerateLabel": true
        },
        "240": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "238"
          },
          "geom": {
            "loc": {
              "x": 193,
              "y": 287
            }
          },
          "label": "Check Answer",
          "constraint": "ActionButtonHide",
          "messages": [
            "Check Answer",
            "Check Answer"
          ],
          "style": {
            "selectable": false
          }
        },
        "241": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "147",
            "1": "239"
          },
          "geom": {
            "loc": {
              "x": 28,
              "y": 188
            }
          },
          "label": "New Sum",
          "constraint": "ActionButtonPresentSimultaneously",
          "messages": [
            "New Sum"
          ],
          "style": {
            "selectable": false
          }
        },
        "242": {
          "kind": "Button",
          "genus": "Action",
          "geom": {
            "loc": {
              "x": 757,
              "y": -7
            }
          },
          "label": "Next Page",
          "constraint": "ActionButtonLinkPage",
          "messages": [
            "Next Page"
          ],
          "pageId": "8",
          "style": {
            "selectable": false
          }
        },
        "243": {
          "kind": "Button",
          "genus": "Action",
          "geom": {
            "loc": {
              "x": 657,
              "y": -7
            }
          },
          "label": "Previous Page",
          "constraint": "ActionButtonLinkPage",
          "messages": [
            "Previous Page"
          ],
          "pageId": "6",
          "style": {
            "selectable": false
          }
        }
      }
    },
    {
      "metadata": {
        "title": "8",
        "id": "8",
        "sketchRect": {
          "top": -24,
          "left": -2,
          "bottom": 667,
          "right": 1131
        }
      },
      "preferences": {
        "units": {
          "length": "cm",
          "angle": "deg"
        },
        "precision": {
          "length": 2,
          "angle": 2,
          "scalar": 2
        },
        "colorableComponents": {
          "Points": {
            "color": "rgb(0,0,252)"
          },
          "Straights": {
            "color": "rgb(0,126,0)"
          },
          "Curves": {
            "color": "black"
          },
          "Interior": {
            "color": "yellow"
          },
          "Plot": {
            "color": "rgb(0,125,0)"
          },
          "PointLocus": {
            "color": "rgb(121,0,0)"
          },
          "Selection": {
            "color": "rgb(188,0,188)"
          },
          "Background": {
            "color": "rgb(248,248,248)"
          },
          "ActionButton": {
            "color": "rgb(255,128,0)"
          },
          "Axis": {
            "color": "rgb(179,179,179)"
          }
        },
        "text": {
          "mathItalicization": true,
          "textTypes": {
            "Label": {
              "font-family": "\"Comic Sans MS\", sans-serif",
              "font-size": 20,
              "font-weight": "normal"
            },
            "Caption": {
              "font-family": "\"Comic Sans MS\", sans-serif",
              "font-size": 18,
              "font-weight": "bold",
              "text-decoration": "underline"
            },
            "Measurement": {
              "font-family": "\"Comic Sans MS\", sans-serif"
            },
            "Action": {
              "label": {
                "font-family": "\"Comic Sans MS\", sans-serif",
                "font-size": 12
              }
            },
            "Table": {
              "font-family": "\"Comic Sans MS\", sans-serif",
              "font-size": 16
            },
            "AxisTicksAndOptionalLabel": {
              "font-family": "\"Comic Sans MS\", sans-serif",
              "font-size": 28
            }
          }
        },
        "limitScrolling": true
      },
      "objects": {
        "1": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 46,
              "y": 186
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "7",
          "label": "first integer",
          "style": {
            "font-size": 16,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true,
            "selectable": false
          }
        },
        "2": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 237,
              "y": 188
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "4",
          "label": "second integer",
          "style": {
            "font-size": 16,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true,
            "selectable": false
          }
        },
        "3": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "1",
            "1": "2"
          },
          "geom": {
            "loc": {
              "x": 1194,
              "y": 135
            }
          },
          "latentVisibility": true,
          "label": "New Integers",
          "style": {
            "hidden": true,
            "label": {
              "font-size": 10
            },
            "selectable": false
          },
          "constraint": "ActionButtonAnimate",
          "messages": [
            "New Integers"
          ],
          "animationStates": [
            {
              "rate": 1,
              "timeInterval": 1,
              "repeat": false,
              "motionType": "random",
              "lowerParamBound": -10.5,
              "upperParamBound": 10.5,
              "discrete": false
            },
            {
              "rate": 1,
              "timeInterval": 1,
              "repeat": false,
              "motionType": "random",
              "lowerParamBound": -10,
              "upperParamBound": 10,
              "discrete": false
            }
          ]
        },
        "4": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "1"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 791,
              "y": 95
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "round(@0)",
          "latentVisibility": true,
          "label": "m[1]",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "5": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "2"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 966,
              "y": 93
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "round(@0)",
          "latentVisibility": true,
          "label": "m[2]",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "6": {
          "kind": "Expression",
          "genus": "DistanceParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1154,
              "y": 74
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "0.8 cm",
          "latentVisibility": true,
          "label": "rad tile",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true,
            "selectable": false
          }
        },
        "7": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "4"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 791,
              "y": 113
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1+sgn(-.5+sgn(@0)))/2",
          "latentVisibility": true,
          "label": "1st integer >0",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "8": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "5"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 966,
              "y": 111
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1+sgn(-.5+sgn(@0)))/2",
          "latentVisibility": true,
          "label": "2nd integer >0",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "9": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "7"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 791,
              "y": 130
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*255",
          "latentVisibility": true,
          "label": "1st int red",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "10": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {},
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 791,
              "y": 147
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "0*0",
          "latentVisibility": true,
          "label": "1st int green",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "11": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "7"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 791,
              "y": 164
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-@0)*255",
          "latentVisibility": true,
          "label": "1st int blue",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "12": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "8"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 966,
              "y": 129
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*255",
          "latentVisibility": true,
          "label": "2nd int red",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "13": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {},
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 966,
              "y": 146
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "0*0",
          "latentVisibility": true,
          "label": "2nd int green",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "14": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "8"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 966,
              "y": 163
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-@0)*255",
          "latentVisibility": true,
          "label": "2nd int blue",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "15": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "4"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 791,
              "y": 181
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-abs(sgn(@0))",
          "latentVisibility": true,
          "label": "m[1]=0",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "16": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "5"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 972,
              "y": 184
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-abs(sgn(@0))",
          "latentVisibility": true,
          "label": "m[2]=0",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "17": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "4"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 11,
              "y": 76
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0",
          "label": "1",
          "style": {
            "precision": 0,
            "nameOrigin": "noVisibleName",
            "selectable": false
          }
        },
        "18": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "5"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 11,
              "y": 128
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0",
          "label": "f",
          "style": {
            "precision": 0,
            "nameOrigin": "noVisibleName",
            "selectable": false
          }
        },
        "19": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "15",
            "1": "6"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 791,
              "y": 204
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-@0)*@1",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "20": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "16",
            "1": "6"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 972,
              "y": 207
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-@0)*@1",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "21": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "4"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 791,
              "y": 227
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(@0)",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "22": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "5"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 972,
              "y": 230
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(@0)",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "23": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "21"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 791,
              "y": 249
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0-1",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "24": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "22"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 972,
              "y": 252
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0-1",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "25": {
          "kind": "Expression",
          "genus": "DistanceParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 791,
              "y": 271
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1.9 cm",
          "latentVisibility": true,
          "label": "spacing",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true,
            "selectable": false
          }
        },
        "26": {
          "kind": "Expression",
          "genus": "DistanceParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 972,
              "y": 274
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1.9 cm",
          "latentVisibility": true,
          "label": "spacing",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true,
            "selectable": false
          }
        },
        "27": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 63,
              "y": 58
            }
          },
          "style": {
            "hidden": true
          }
        },
        "28": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 63,
              "y": 424
            }
          },
          "style": {
            "hidden": true
          }
        },
        "29": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "27",
            "p1": "28"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "30": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "29"
          },
          "value": 0.22950819672131148,
          "constraint": "PointOnPath",
          "label": "B",
          "style": {
            "hidden": true
          }
        },
        "31": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "30",
            "distance": "26"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "32": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "30",
            "radius": "20"
          },
          "constraint": "CircleByRadius"
        },
        "33": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "circle": "32"
          },
          "constraint": "CircleInterior",
          "style": {
            "hidden": true,
            "color": "rgb(255,128,0)",
            "layerOrder": 6
          }
        },
        "34": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "source": "33",
            "blue": "14",
            "green": "13",
            "red": "12"
          },
          "colorRange": "ReflectToRange",
          "colorModel": "TrivariateRGB",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeTrivariate",
          "style": {
            "color": "red",
            "layerOrder": 7
          }
        },
        "35": {
          "kind": "Map",
          "genus": "IterateMap",
          "parents": {
            "0": "32",
            "1": "33",
            "2": "34",
            "3": "31",
            "preimage0": "30",
            "map0image0": "31",
            "depth": "24"
          },
          "constraint": "IterateMapByParametricDepth",
          "rerandomizePointsOnPaths": false,
          "finalIterationOnly": false
        },
        "36": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "34",
            "map": "35"
          },
          "constraint": "IterateImage",
          "style": {
            "opacity": 0.49999237060546875,
            "layerOrder": 12
          }
        },
        "37": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "32",
            "map": "35"
          },
          "constraint": "IterateImage",
          "style": {
            "line-style": "solid",
            "width": 3
          }
        },
        "38": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "29"
          },
          "value": 0.08743169398907104,
          "constraint": "PointOnPath",
          "label": "A",
          "style": {
            "hidden": true
          }
        },
        "39": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "38",
            "distance": "25"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "40": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "38",
            "radius": "19"
          },
          "constraint": "CircleByRadius"
        },
        "41": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "circle": "40"
          },
          "constraint": "CircleInterior",
          "style": {
            "hidden": true,
            "color": "black",
            "layerOrder": 8
          }
        },
        "42": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "source": "41",
            "blue": "11",
            "green": "10",
            "red": "9"
          },
          "colorRange": "ReflectToRange",
          "colorModel": "TrivariateRGB",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeTrivariate",
          "style": {
            "color": "red",
            "layerOrder": 9
          }
        },
        "43": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 11,
              "y": 100
            }
          },
          "textMFS": "<T'+'>",
          "style": {
            "font-weight": "normal",
            "text-decoration": "none",
            "selectable": false
          }
        },
        "44": {
          "kind": "Map",
          "genus": "IterateMap",
          "parents": {
            "0": "39",
            "1": "40",
            "2": "41",
            "3": "42",
            "preimage0": "38",
            "map0image0": "39",
            "depth": "23"
          },
          "constraint": "IterateMapByParametricDepth",
          "rerandomizePointsOnPaths": false,
          "finalIterationOnly": false
        },
        "45": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "40",
            "map": "44"
          },
          "constraint": "IterateImage",
          "style": {
            "line-style": "solid",
            "width": 3
          }
        },
        "46": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "42",
            "map": "44"
          },
          "constraint": "IterateImage",
          "style": {
            "opacity": 0.49999237060546875,
            "layerOrder": 13
          }
        },
        "47": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "7"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 791,
              "y": 295
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-@0",
          "latentVisibility": true,
          "label": "m[3]",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "48": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "8"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 972,
              "y": 298
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-@0",
          "latentVisibility": true,
          "label": "m[3]",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "49": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "7",
            "1": "8"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 792,
              "y": 356
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(sgn(@0*@1))",
          "latentVisibility": true,
          "label": "both +ve",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "50": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "47",
            "1": "48"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 792,
              "y": 373
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(sgn(@0*@1))",
          "latentVisibility": true,
          "label": "both -ve",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "51": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "49",
            "1": "50"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 792,
              "y": 390
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "sgn(abs(sgn(@0))+abs(sgn(@1)))",
          "latentVisibility": true,
          "label": "same sign",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "52": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "51"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 792,
              "y": 407
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-@0",
          "latentVisibility": true,
          "label": "m[5]",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "53": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "4"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 792,
              "y": 424
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(@0)",
          "latentVisibility": true,
          "label": "m[4]",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "54": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "5"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 792,
              "y": 445
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(@0)",
          "latentVisibility": true,
          "label": "m[4]",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "55": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "53",
            "1": "54"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 520,
              "y": 390
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(.5+sgn(@0-@1)))/2",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "56": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "55"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 520,
              "y": 390
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-@0",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "57": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "55",
            "1": "53",
            "2": "56",
            "3": "54"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 792,
              "y": 466
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*@1+@2*@3",
          "latentVisibility": true,
          "label": "min (m[4], m[4])",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "58": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "52",
            "1": "57"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 792,
              "y": 488
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*@1",
          "latentVisibility": true,
          "label": "# zeros",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "59": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "58",
            "1": "25"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 792,
              "y": 505
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*@1",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "60": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "25",
            "1": "6",
            "2": "19"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 792,
              "y": 546
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(@0-2*@1)/2+@2",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "61": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "38",
            "distance": "60"
          },
          "angle": 3.1415926535897865,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "62": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "30",
            "distance": "60"
          },
          "angle": 3.1415926535897865,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "63": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 792,
              "y": 323
            }
          },
          "textMFS": "<VL<T'determine # of zeros'><T'draw the yellow shade ot cover zeros'>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "font-weight": "normal",
            "text-decoration": "none",
            "color": "rgb(255,128,0)",
            "selectable": false
          }
        },
        "64": {
          "kind": "Expression",
          "genus": "DistanceParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 792,
              "y": 522
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "0.8 cm",
          "latentVisibility": true,
          "label": "vert shift",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 1,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true,
            "selectable": false
          }
        },
        "65": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "62",
            "distance": "64"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "66": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "65",
            "distance": "59"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "67": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "61",
            "distance": "64"
          },
          "angle": -1.5707963267949,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "68": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "67",
            "distance": "59"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "69": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "0": "68",
            "1": "66",
            "2": "65",
            "3": "67"
          },
          "constraint": "PolygonFromPoints",
          "style": {
            "layerOrder": 14
          }
        },
        "70": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 791,
              "y": 24
            }
          },
          "textMFS": "<VL<T'generate first integer'><T'set up RGB colouring'><T'calculations for iteration'>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "font-weight": "normal",
            "text-decoration": "none",
            "color": "rgb(255,128,0)",
            "selectable": false
          }
        },
        "71": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 966,
              "y": 22
            }
          },
          "textMFS": "<VL<T'generate first integer'><T'set up RGB colouring'><T'calculations for iteration'>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "font-weight": "normal",
            "text-decoration": "none",
            "color": "rgb(255,128,0)",
            "selectable": false
          }
        },
        "72": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "4",
            "1": "5"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1008,
              "y": 334
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0+@1",
          "latentVisibility": true,
          "label": "m[6]",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "73": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "4",
            "1": "5",
            "2": "72"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 452,
              "y": 179
            }
          },
          "textMFS": "<H<?1xC0001<H<T'7'>>><T' + ('><?1xC0002<H<T'4'>>><T') = '><?1xC0003<H<T'11'>>>>",
          "style": {
            "font-weight": "normal",
            "text-decoration": "none",
            "selectable": false
          }
        },
        "74": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 8,
              "y": -18
            }
          },
          "textMFS": "<T'Adding Two Integers Consolidation'>",
          "style": {
            "font-size": 20,
            "selectable": false
          }
        },
        "75": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 26,
              "y": 272
            }
          },
          "textMFS": "<VL<T'When will an integer addition question look exactly the same as whole '><T'number addition question?'><T''><T''><T''><T'When will an integer addition question look exactly the same as whole '><T'number subtraction question?'>>",
          "style": {
            "font-weight": "normal",
            "text-decoration": "none",
            "color": "green",
            "selectable": false
          }
        },
        "76": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "55",
            "1": "54",
            "2": "56",
            "3": "53"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 936,
              "y": 471
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*@1+@2*@3",
          "latentVisibility": true,
          "label": "max (m[4], m[4])",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "77": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "76",
            "1": "58"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 936,
              "y": 493
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0-@1",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "78": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "1",
            "1": "2",
            "2": "58",
            "3": "77"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 815,
              "y": 600
            }
          },
          "textMFS": "<VL<H<T'The sum of '><?1xC0001<H<T'7'>>><T' and '><?1xC0002<H<T'4'>>><T' will generate '><?1xC0003<H<T'0'>>><T' zero pairs leaving '><?1xC0004<H<T'7'>>><T' more '><SR1G1L100<T'blue '>><T'counters.'>>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "font-weight": "normal",
            "text-decoration": "none",
            "selectable": false
          }
        },
        "79": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "72"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1168,
              "y": 408
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1+sgn(-.5+sgn(@0)))/2",
          "latentVisibility": true,
          "label": "m[6]>0",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "80": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "72"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1168,
              "y": 431
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(.5+sgn(@0)))/2",
          "latentVisibility": true,
          "label": "m[6]<0",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "81": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "72"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1168,
              "y": 454
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-abs(sgn(@0))",
          "latentVisibility": true,
          "label": "m[6]=0",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "82": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "1",
            "1": "2",
            "2": "58",
            "3": "77"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 815,
              "y": 620
            }
          },
          "textMFS": "<VL<H<T'The sum of '><?1xC0001<H<T'7'>>><T' and '><?1xC0002<H<T'4'>>><T' will generate '><?1xC0003<H<T'0'>>><T' zero pairs leaving '><?1xC0004<H<T'7'>>><T' more '><SR100G1L1<T'red '>><T'counters.'>>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "font-weight": "normal",
            "text-decoration": "none",
            "selectable": false
          }
        },
        "83": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "1",
            "1": "2",
            "2": "58"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 815,
              "y": 640
            }
          },
          "textMFS": "<VL<H<T'The sum of '><?1xC0001<H<T'7'>>><T' and '><?1xC0002<H<T'4'>>><T' will generate '><?1xC0003<H<T'0'>>><T' zero pairs leaving no unpaired counters.'>>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "font-weight": "normal",
            "text-decoration": "none",
            "selectable": false
          }
        },
        "84": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "80"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 375,
              "y": 605
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1/@0*2",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "85": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 390,
              "y": 628
            }
          },
          "style": {
            "hidden": true
          }
        },
        "86": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "85"
          },
          "angle": -1.5707963267949,
          "distance": 14.173228346456693,
          "constraint": "TranslateFixDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "87": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "86",
            "center": "85",
            "measure": "84"
          },
          "constraint": "DilateMeasureFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "88": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "79"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 375,
              "y": 605
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1/@0*2",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "89": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "86",
            "center": "85",
            "measure": "88"
          },
          "constraint": "DilateMeasureFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "90": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "81"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 375,
              "y": 605
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1/@0*2",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "91": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "86",
            "center": "85",
            "measure": "90"
          },
          "constraint": "DilateMeasureFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "92": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "72"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1008,
              "y": 352
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(@0)",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "93": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "1",
            "1": "2",
            "2": "92"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 815,
              "y": 659
            }
          },
          "textMFS": "<VL<H<T'The sum of '><?1xC0001<H<T'7'>>><T' and '><?1xC0002<H<T'4'>>><T' does not generate zero pairs so there are a total of '><?1xC0003<H<T'11'>>><T' '><SR100G1L1<T'red '>><T'counters.'>>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "font-weight": "normal",
            "text-decoration": "none",
            "selectable": false
          }
        },
        "94": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "1",
            "1": "2",
            "2": "92"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 815,
              "y": 679
            }
          },
          "textMFS": "<VL<H<T'The sum of '><?1xC0001<H<T'7'>>><T' and '><?1xC0002<H<T'4'>>><T' does not generate zero pairs so there are a total of '><?1xC0003<H<T'11'>>><T' '><SR1G1L100<T'blue '>><T'counters.'>>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "font-weight": "normal",
            "text-decoration": "none",
            "selectable": false
          }
        },
        "95": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "49"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1131,
              "y": 526
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1/@0*2",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "96": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "50"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1131,
              "y": 526
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1/@0*2",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "97": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "49"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1019,
              "y": 394
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-@0",
          "latentVisibility": true,
          "label": "m[7]",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "98": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "50"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1019,
              "y": 411
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-@0",
          "latentVisibility": true,
          "label": "m[7]",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "99": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "97",
            "1": "79"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1128,
              "y": 497
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(sgn(@0*@1))",
          "latentVisibility": true,
          "label": "(m[7])^(m[6]>0)",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "100": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "98",
            "1": "80"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1128,
              "y": 519
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(sgn(@0*@1))",
          "latentVisibility": true,
          "label": "(m[7])^(m[6]<0)",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "101": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "99"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1146,
              "y": 538
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1/@0*2",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "102": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "100"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1146,
              "y": 538
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1/@0*2",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "103": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 24,
              "y": 64
            }
          },
          "style": {
            "hidden": true
          }
        },
        "104": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 663,
              "y": 64
            }
          },
          "style": {
            "hidden": true
          }
        },
        "105": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "103",
            "p1": "104"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "106": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1223,
              "y": 500
            }
          },
          "textMFS": "<VL<T'diff signs and greater than 0'>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "font-weight": "normal",
            "text-decoration": "none",
            "color": "rgb(255,128,0)",
            "selectable": false
          }
        },
        "107": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1223,
              "y": 519
            }
          },
          "textMFS": "<VL<T'diff signs and less than 0'>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "font-weight": "normal",
            "text-decoration": "none",
            "color": "rgb(255,128,0)",
            "selectable": false
          }
        },
        "108": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1226,
              "y": 405
            }
          },
          "textMFS": "<VL<T'sum +ve'>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "font-weight": "normal",
            "text-decoration": "none",
            "color": "rgb(255,128,0)",
            "selectable": false
          }
        },
        "109": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1220,
              "y": 428
            }
          },
          "textMFS": "<VL<T'sum -ve'>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "font-weight": "normal",
            "text-decoration": "none",
            "color": "rgb(255,128,0)",
            "selectable": false
          }
        },
        "110": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1228,
              "y": 453
            }
          },
          "textMFS": "<VL<T'sum 0'>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "font-weight": "normal",
            "text-decoration": "none",
            "color": "rgb(255,128,0)",
            "selectable": false
          }
        },
        "111": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "105"
          },
          "value": 0.41471048513302033,
          "constraint": "PointOnPath",
          "style": {
            "hidden": true
          }
        },
        "112": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "111"
          },
          "angle": -1.5707963267949,
          "distance": 14.173228346456693,
          "constraint": "TranslateFixDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "113": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "112",
            "center": "111",
            "measure": "102"
          },
          "constraint": "DilateMeasureFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "114": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "113",
            "text": "78"
          },
          "constraint": "Pegged",
          "style": {
            "font-size": 16,
            "font-weight": "normal",
            "text-decoration": "none",
            "selectable": false
          }
        },
        "115": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "105"
          },
          "value": 0.41784037558685444,
          "constraint": "PointOnPath",
          "style": {
            "hidden": true
          }
        },
        "116": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "115"
          },
          "angle": -1.5707963267949,
          "distance": 14.173228346456693,
          "constraint": "TranslateFixDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "117": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "116",
            "center": "115",
            "measure": "101"
          },
          "constraint": "DilateMeasureFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "118": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "117",
            "text": "82"
          },
          "constraint": "Pegged",
          "style": {
            "font-size": 16,
            "font-weight": "normal",
            "text-decoration": "none",
            "selectable": false
          }
        },
        "119": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "105"
          },
          "value": 0.4131455399061033,
          "constraint": "PointOnPath",
          "style": {
            "hidden": true
          }
        },
        "120": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "119"
          },
          "angle": -1.5707963267949,
          "distance": 14.173228346456693,
          "constraint": "TranslateFixDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "121": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "120",
            "center": "119",
            "measure": "90"
          },
          "constraint": "DilateMeasureFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "122": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "121",
            "text": "83"
          },
          "constraint": "Pegged",
          "style": {
            "font-size": 16,
            "font-weight": "normal",
            "text-decoration": "none",
            "selectable": false
          }
        },
        "123": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "105"
          },
          "value": 0.5571205007824727,
          "constraint": "PointOnPath",
          "style": {
            "hidden": true
          }
        },
        "124": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "123"
          },
          "angle": -1.5707963267949,
          "distance": 14.173228346456693,
          "constraint": "TranslateFixDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "125": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "124",
            "center": "123",
            "measure": "95"
          },
          "constraint": "DilateMeasureFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "126": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "125",
            "text": "93"
          },
          "constraint": "Pegged",
          "style": {
            "font-weight": "normal",
            "text-decoration": "none",
            "selectable": false
          }
        },
        "127": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "105"
          },
          "value": 0.5070422535211268,
          "constraint": "PointOnPath",
          "style": {
            "hidden": true
          }
        },
        "128": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "127"
          },
          "angle": -1.5707963267949,
          "distance": 14.173228346456693,
          "constraint": "TranslateFixDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "129": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "128",
            "center": "127",
            "measure": "96"
          },
          "constraint": "DilateMeasureFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "130": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "129",
            "text": "94"
          },
          "constraint": "Pegged",
          "style": {
            "font-size": 16,
            "font-weight": "normal",
            "text-decoration": "none",
            "selectable": false
          }
        },
        "131": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "3",
            "1": "4",
            "2": "5",
            "3": "6",
            "4": "7",
            "5": "8",
            "6": "9",
            "7": "10",
            "8": "11",
            "9": "12",
            "10": "13",
            "11": "14",
            "12": "15",
            "13": "16",
            "14": "19",
            "15": "20",
            "16": "21",
            "17": "22",
            "18": "23",
            "19": "24",
            "20": "25",
            "21": "26",
            "22": "47",
            "23": "48",
            "24": "49",
            "25": "50",
            "26": "51",
            "27": "52",
            "28": "53",
            "29": "54",
            "30": "57",
            "31": "58",
            "32": "59",
            "33": "60",
            "34": "63",
            "35": "64",
            "36": "70",
            "37": "71",
            "38": "72",
            "39": "76",
            "40": "77",
            "41": "78",
            "42": "79",
            "43": "80",
            "44": "81",
            "45": "82",
            "46": "83",
            "47": "92",
            "48": "93",
            "49": "94",
            "50": "97",
            "51": "98",
            "52": "99",
            "53": "100",
            "54": "106",
            "55": "107",
            "56": "108",
            "57": "109",
            "58": "110"
          },
          "geom": {
            "loc": {
              "x": 1229,
              "y": 5
            }
          },
          "label": "Show Objects",
          "style": {
            "label": {
              "font-size": 10
            },
            "selectable": false
          },
          "constraint": "ActionButtonToggleHideShow",
          "messages": [
            "Hide Objects",
            "Show Objects"
          ],
          "shouldAutogenerateLabel": true
        },
        "132": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 25,
              "y": 337
            }
          },
          "textMFS": "<VL<T'When both addends are positive. '><0><0><0><0><T'When the first addend is positive with the greatest magnitude and'><T'the second addend is negative. '><F110xxFFFFFFFFx20x04x>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-weight": "normal",
            "text-decoration": "none",
            "color": "fuchsia",
            "selectable": false
          }
        },
        "133": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "132"
          },
          "geom": {
            "loc": {
              "x": 641,
              "y": 280
            }
          },
          "label": "Show Answer",
          "style": {
            "color": "rgb(160,160,160)",
            "selectable": false
          },
          "constraint": "ActionButtonToggleHideShow",
          "messages": [
            "Hide Answer",
            "Show Answer"
          ]
        },
        "134": {
          "kind": "Button",
          "genus": "Action",
          "geom": {
            "loc": {
              "x": 753,
              "y": -4
            }
          },
          "label": "Next Page",
          "style": {
            "color": "rgb(160,160,160)",
            "selectable": false
          },
          "constraint": "ActionButtonLinkPage",
          "messages": [
            "Next Page"
          ],
          "pageId": "9"
        },
        "135": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "1",
            "1": "2",
            "2": "72"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 454,
              "y": 219
            }
          },
          "textMFS": "<H<?1xC0001<H<T'7'>>><?1xD0002<H<T' + '><H<T'4'>>>><T' = '><?1xC0003<H<T'11'>>>>",
          "style": {
            "font-weight": "normal",
            "text-decoration": "none",
            "selectable": false
          }
        },
        "136": {
          "kind": "Button",
          "genus": "Action",
          "geom": {
            "loc": {
              "x": 657,
              "y": -3
            }
          },
          "label": "Previous Page",
          "style": {
            "color": "rgb(160,160,160)",
            "selectable": false
          },
          "constraint": "ActionButtonLinkPage",
          "messages": [
            "Previous Page"
          ],
          "pageId": "7"
        }
      }
    },
    {
      "metadata": {
        "title": "9",
        "id": "9",
        "sketchRect": {
          "top": -31,
          "left": -5,
          "bottom": 660,
          "right": 1128
        }
      },
      "preferences": {
        "units": {
          "length": "cm",
          "angle": "deg"
        },
        "precision": {
          "length": 2,
          "angle": 2,
          "scalar": 2
        },
        "colorableComponents": {
          "Points": {
            "color": "rgb(0,0,252)"
          },
          "Straights": {
            "color": "rgb(0,126,0)"
          },
          "Curves": {
            "color": "black"
          },
          "Interior": {
            "color": "yellow"
          },
          "Plot": {
            "color": "rgb(0,125,0)"
          },
          "PointLocus": {
            "color": "rgb(121,0,0)"
          },
          "Selection": {
            "color": "rgb(188,0,188)"
          },
          "Background": {
            "color": "rgb(248,248,248)"
          },
          "ActionButton": {
            "color": "rgb(255,128,0)"
          },
          "Axis": {
            "color": "rgb(179,179,179)"
          }
        },
        "text": {
          "mathItalicization": true,
          "textTypes": {
            "Label": {
              "font-family": "\"Comic Sans MS\", sans-serif",
              "font-size": 20,
              "font-weight": "normal"
            },
            "Caption": {
              "font-family": "\"Comic Sans MS\", sans-serif",
              "font-size": 18,
              "font-weight": "bold",
              "text-decoration": "underline"
            },
            "Measurement": {
              "font-family": "\"Comic Sans MS\", sans-serif"
            },
            "Action": {
              "label": {
                "font-family": "\"Comic Sans MS\", sans-serif",
                "font-size": 10
              }
            },
            "Table": {
              "font-family": "\"Comic Sans MS\", sans-serif",
              "font-size": 16
            },
            "AxisTicksAndOptionalLabel": {
              "font-family": "\"Comic Sans MS\", sans-serif",
              "font-size": 28
            }
          }
        },
        "limitScrolling": true
      },
      "objects": {
        "1": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 48,
              "y": 187
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "3",
          "label": "first integer",
          "style": {
            "font-size": 16,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true,
            "selectable": false
          }
        },
        "2": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 244,
              "y": 188
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "7",
          "label": "second integer",
          "style": {
            "font-size": 16,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true,
            "selectable": false
          }
        },
        "3": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "1",
            "1": "2"
          },
          "geom": {
            "loc": {
              "x": 1194,
              "y": 135
            }
          },
          "latentVisibility": true,
          "label": "New Integers",
          "style": {
            "hidden": true,
            "selectable": false
          },
          "constraint": "ActionButtonAnimate",
          "messages": [
            "New Integers"
          ],
          "animationStates": [
            {
              "rate": 1,
              "timeInterval": 1,
              "repeat": false,
              "motionType": "random",
              "lowerParamBound": -10.5,
              "upperParamBound": 10.5,
              "discrete": false
            },
            {
              "rate": 1,
              "timeInterval": 1,
              "repeat": false,
              "motionType": "random",
              "lowerParamBound": -10,
              "upperParamBound": 10,
              "discrete": false
            }
          ]
        },
        "4": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "1"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 791,
              "y": 95
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "round(@0)",
          "latentVisibility": true,
          "label": "m[1]",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "5": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "2"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 966,
              "y": 93
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "round(@0)",
          "latentVisibility": true,
          "label": "m[2]",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "6": {
          "kind": "Expression",
          "genus": "DistanceParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1154,
              "y": 74
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "0.8 cm",
          "latentVisibility": true,
          "label": "rad tile",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true,
            "selectable": false
          }
        },
        "7": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "4"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 791,
              "y": 113
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1+sgn(-.5+sgn(@0)))/2",
          "latentVisibility": true,
          "label": "1st integer >0",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "8": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "5"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 966,
              "y": 111
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1+sgn(-.5+sgn(@0)))/2",
          "latentVisibility": true,
          "label": "2nd integer >0",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "9": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "7"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 791,
              "y": 130
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*255",
          "latentVisibility": true,
          "label": "1st int red",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "10": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {},
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 791,
              "y": 147
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "0*0",
          "latentVisibility": true,
          "label": "1st int green",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "11": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "7"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 791,
              "y": 164
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-@0)*255",
          "latentVisibility": true,
          "label": "1st int blue",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "12": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "8"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 966,
              "y": 129
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*255",
          "latentVisibility": true,
          "label": "2nd int red",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "13": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {},
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 966,
              "y": 146
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "0*0",
          "latentVisibility": true,
          "label": "2nd int green",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "14": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "8"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 966,
              "y": 163
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-@0)*255",
          "latentVisibility": true,
          "label": "2nd int blue",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "15": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "4"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 791,
              "y": 181
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-abs(sgn(@0))",
          "latentVisibility": true,
          "label": "m[1]=0",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "16": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "5"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 972,
              "y": 184
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-abs(sgn(@0))",
          "latentVisibility": true,
          "label": "m[2]=0",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "17": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "4"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 9,
              "y": 76
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0",
          "label": "1",
          "style": {
            "precision": 0,
            "nameOrigin": "noVisibleName",
            "selectable": false
          }
        },
        "18": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "5"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 9,
              "y": 128
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0",
          "label": "f",
          "style": {
            "precision": 0,
            "nameOrigin": "noVisibleName",
            "selectable": false
          }
        },
        "19": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "15",
            "1": "6"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 791,
              "y": 204
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-@0)*@1",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "20": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "16",
            "1": "6"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 972,
              "y": 207
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-@0)*@1",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "21": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "4"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 791,
              "y": 227
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(@0)",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "22": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "5"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 972,
              "y": 230
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(@0)",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "23": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "21"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 791,
              "y": 249
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0-1",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "24": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "22"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 972,
              "y": 252
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0-1",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "25": {
          "kind": "Expression",
          "genus": "DistanceParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 791,
              "y": 271
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1.9 cm",
          "latentVisibility": true,
          "label": "spacing",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true,
            "selectable": false
          }
        },
        "26": {
          "kind": "Expression",
          "genus": "DistanceParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 972,
              "y": 274
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1.9 cm",
          "latentVisibility": true,
          "label": "spacing",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true,
            "selectable": false
          }
        },
        "27": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 63,
              "y": 58
            }
          },
          "style": {
            "hidden": true
          }
        },
        "28": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 63,
              "y": 424
            }
          },
          "style": {
            "hidden": true
          }
        },
        "29": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "27",
            "p1": "28"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "30": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "29"
          },
          "value": 0.22950819672131148,
          "constraint": "PointOnPath",
          "label": "B",
          "style": {
            "hidden": true
          }
        },
        "31": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "30",
            "distance": "26"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "32": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "30",
            "radius": "20"
          },
          "constraint": "CircleByRadius"
        },
        "33": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "circle": "32"
          },
          "constraint": "CircleInterior",
          "style": {
            "hidden": true,
            "color": "rgb(255,128,0)",
            "layerOrder": 6
          }
        },
        "34": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "source": "33",
            "blue": "14",
            "green": "13",
            "red": "12"
          },
          "colorRange": "ReflectToRange",
          "colorModel": "TrivariateRGB",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeTrivariate",
          "style": {
            "color": "red",
            "layerOrder": 7
          }
        },
        "35": {
          "kind": "Map",
          "genus": "IterateMap",
          "parents": {
            "0": "32",
            "1": "33",
            "2": "34",
            "3": "31",
            "preimage0": "30",
            "map0image0": "31",
            "depth": "24"
          },
          "constraint": "IterateMapByParametricDepth",
          "rerandomizePointsOnPaths": false,
          "finalIterationOnly": false
        },
        "36": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "34",
            "map": "35"
          },
          "constraint": "IterateImage",
          "style": {
            "opacity": 0.49999237060546875,
            "layerOrder": 12
          }
        },
        "37": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "32",
            "map": "35"
          },
          "constraint": "IterateImage",
          "style": {
            "line-style": "solid",
            "width": 3
          }
        },
        "38": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "29"
          },
          "value": 0.08743169398907104,
          "constraint": "PointOnPath",
          "label": "A",
          "style": {
            "hidden": true
          }
        },
        "39": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "38",
            "distance": "25"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "40": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "38",
            "radius": "19"
          },
          "constraint": "CircleByRadius"
        },
        "41": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "circle": "40"
          },
          "constraint": "CircleInterior",
          "style": {
            "hidden": true,
            "color": "black",
            "layerOrder": 8
          }
        },
        "42": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "source": "41",
            "blue": "11",
            "green": "10",
            "red": "9"
          },
          "colorRange": "ReflectToRange",
          "colorModel": "TrivariateRGB",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeTrivariate",
          "style": {
            "color": "red",
            "layerOrder": 9
          }
        },
        "43": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 9,
              "y": 100
            }
          },
          "textMFS": "<T'+'>",
          "style": {
            "font-weight": "normal",
            "text-decoration": "none",
            "selectable": false
          }
        },
        "44": {
          "kind": "Map",
          "genus": "IterateMap",
          "parents": {
            "0": "39",
            "1": "40",
            "2": "41",
            "3": "42",
            "preimage0": "38",
            "map0image0": "39",
            "depth": "23"
          },
          "constraint": "IterateMapByParametricDepth",
          "rerandomizePointsOnPaths": false,
          "finalIterationOnly": false
        },
        "45": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "40",
            "map": "44"
          },
          "constraint": "IterateImage",
          "style": {
            "line-style": "solid",
            "width": 3
          }
        },
        "46": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "42",
            "map": "44"
          },
          "constraint": "IterateImage",
          "style": {
            "opacity": 0.49999237060546875,
            "layerOrder": 13
          }
        },
        "47": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "7"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 791,
              "y": 295
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-@0",
          "latentVisibility": true,
          "label": "m[3]",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "48": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "8"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 972,
              "y": 298
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-@0",
          "latentVisibility": true,
          "label": "m[3]",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "49": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "7",
            "1": "8"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 792,
              "y": 356
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(sgn(@0*@1))",
          "latentVisibility": true,
          "label": "both +ve",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "50": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "47",
            "1": "48"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 792,
              "y": 373
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(sgn(@0*@1))",
          "latentVisibility": true,
          "label": "both -ve",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "51": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "49",
            "1": "50"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 792,
              "y": 390
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "sgn(abs(sgn(@0))+abs(sgn(@1)))",
          "latentVisibility": true,
          "label": "same sign",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "52": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "51"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 792,
              "y": 407
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-@0",
          "latentVisibility": true,
          "label": "m[5]",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "53": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "4"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 792,
              "y": 424
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(@0)",
          "latentVisibility": true,
          "label": "m[4]",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "54": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "5"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 792,
              "y": 445
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(@0)",
          "latentVisibility": true,
          "label": "m[4]",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "55": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "53",
            "1": "54"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 520,
              "y": 390
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(.5+sgn(@0-@1)))/2",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "56": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "55"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 520,
              "y": 390
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-@0",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "57": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "55",
            "1": "53",
            "2": "56",
            "3": "54"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 792,
              "y": 466
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*@1+@2*@3",
          "latentVisibility": true,
          "label": "min (m[4], m[4])",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "58": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "52",
            "1": "57"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 792,
              "y": 488
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*@1",
          "latentVisibility": true,
          "label": "# zeros",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "59": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "58",
            "1": "25"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 792,
              "y": 505
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*@1",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "60": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "25",
            "1": "6",
            "2": "19"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 792,
              "y": 546
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(@0-2*@1)/2+@2",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "61": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "38",
            "distance": "60"
          },
          "angle": 3.1415926535897865,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "62": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "30",
            "distance": "60"
          },
          "angle": 3.1415926535897865,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "63": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 792,
              "y": 323
            }
          },
          "textMFS": "<VL<T'determine # of zeros'><T'draw the yellow shade ot cover zeros'>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "font-weight": "normal",
            "text-decoration": "none",
            "color": "rgb(255,128,0)",
            "selectable": false
          }
        },
        "64": {
          "kind": "Expression",
          "genus": "DistanceParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 792,
              "y": 522
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "0.8 cm",
          "latentVisibility": true,
          "label": "vert shift",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 1,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true,
            "selectable": false
          }
        },
        "65": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "62",
            "distance": "64"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "66": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "65",
            "distance": "59"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "67": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "61",
            "distance": "64"
          },
          "angle": -1.5707963267949,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "68": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "67",
            "distance": "59"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "69": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "0": "68",
            "1": "66",
            "2": "65",
            "3": "67"
          },
          "constraint": "PolygonFromPoints",
          "style": {
            "layerOrder": 14
          }
        },
        "70": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 791,
              "y": 24
            }
          },
          "textMFS": "<VL<T'generate first integer'><T'set up RGB colouring'><T'calculations for iteration'>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "font-weight": "normal",
            "text-decoration": "none",
            "color": "rgb(255,128,0)",
            "selectable": false
          }
        },
        "71": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 966,
              "y": 22
            }
          },
          "textMFS": "<VL<T'generate first integer'><T'set up RGB colouring'><T'calculations for iteration'>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "font-weight": "normal",
            "text-decoration": "none",
            "color": "rgb(255,128,0)",
            "selectable": false
          }
        },
        "72": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "4",
            "1": "5"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1008,
              "y": 334
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0+@1",
          "latentVisibility": true,
          "label": "m[6]",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "73": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "4",
            "1": "5",
            "2": "72"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 445,
              "y": 188
            }
          },
          "textMFS": "<H<?1xC0001<H<T'3'>>><T' + ('><?1xC0002<H<T'7'>>><T') = '><?1xC0003<H<T'10'>>>>",
          "style": {
            "font-weight": "normal",
            "text-decoration": "none",
            "selectable": false
          }
        },
        "74": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 14,
              "y": -23
            }
          },
          "textMFS": "<T'Adding Two Integers Using Consolidation'>",
          "style": {
            "font-size": 20,
            "selectable": false
          }
        },
        "75": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 24,
              "y": 239
            }
          },
          "textMFS": "<VL<T'Older textbooks used to state the following rule for adding two integers:'><T'  '><T'If the signs are same, ignore the signs and add the integers and then'><T'keep the sign.'><T'  '><T'If the signs are the different, ignore the signs and subtract the smaller from'><T'the larger and then keep the sign of the integer which is further from zero.'><0><T'Explain why this rule would work?'><0><F111xxFFFFFFFFx20x040x>>",
          "style": {
            "font-weight": "normal",
            "text-decoration": "none",
            "color": "green",
            "selectable": false
          }
        },
        "76": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "55",
            "1": "54",
            "2": "56",
            "3": "53"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 936,
              "y": 471
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*@1+@2*@3",
          "latentVisibility": true,
          "label": "max (m[4], m[4])",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "77": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "76",
            "1": "58"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 936,
              "y": 493
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0-@1",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "78": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "1",
            "1": "2",
            "2": "58",
            "3": "77"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 815,
              "y": 600
            }
          },
          "textMFS": "<VL<H<T'The sum of '><?1xC0001<H<T'3'>>><T' and '><?1xC0002<H<T'7'>>><T' will generate '><?1xC0003<H<T'0'>>><T' zero pairs leaving '><?1xC0004<H<T'7'>>><T' more '><SR1G1L100<T'blue '>><T'counters.'>>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "font-weight": "normal",
            "text-decoration": "none",
            "selectable": false
          }
        },
        "79": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "72"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1168,
              "y": 408
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1+sgn(-.5+sgn(@0)))/2",
          "latentVisibility": true,
          "label": "m[6]>0",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "80": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "72"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1168,
              "y": 431
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(.5+sgn(@0)))/2",
          "latentVisibility": true,
          "label": "m[6]<0",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "81": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "72"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1168,
              "y": 454
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-abs(sgn(@0))",
          "latentVisibility": true,
          "label": "m[6]=0",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "82": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "1",
            "1": "2",
            "2": "58",
            "3": "77"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 815,
              "y": 620
            }
          },
          "textMFS": "<VL<H<T'The sum of '><?1xC0001<H<T'3'>>><T' and '><?1xC0002<H<T'7'>>><T' will generate '><?1xC0003<H<T'0'>>><T' zero pairs leaving '><?1xC0004<H<T'7'>>><T' more '><SR100G1L1<T'red '>><T'counters.'>>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "font-weight": "normal",
            "text-decoration": "none",
            "selectable": false
          }
        },
        "83": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "1",
            "1": "2",
            "2": "58"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 815,
              "y": 640
            }
          },
          "textMFS": "<VL<H<T'The sum of '><?1xC0001<H<T'3'>>><T' and '><?1xC0002<H<T'7'>>><T' will generate '><?1xC0003<H<T'0'>>><T' zero pairs leaving no unpaired counters.'>>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "font-weight": "normal",
            "text-decoration": "none",
            "selectable": false
          }
        },
        "84": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "80"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 375,
              "y": 605
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1/@0*2",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "85": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 390,
              "y": 628
            }
          },
          "style": {
            "hidden": true
          }
        },
        "86": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "85"
          },
          "angle": -1.5707963267949,
          "distance": 14.173228346456693,
          "constraint": "TranslateFixDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "87": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "86",
            "center": "85",
            "measure": "84"
          },
          "constraint": "DilateMeasureFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "88": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "79"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 375,
              "y": 605
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1/@0*2",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "89": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "86",
            "center": "85",
            "measure": "88"
          },
          "constraint": "DilateMeasureFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "90": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "81"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 375,
              "y": 605
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1/@0*2",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "91": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "86",
            "center": "85",
            "measure": "90"
          },
          "constraint": "DilateMeasureFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "92": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "72"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1008,
              "y": 352
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(@0)",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "93": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "1",
            "1": "2",
            "2": "92"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 815,
              "y": 659
            }
          },
          "textMFS": "<VL<H<T'The sum of '><?1xC0001<H<T'3'>>><T' and '><?1xC0002<H<T'7'>>><T' does not generate zero pairs so there are a total of '><?1xC0003<H<T'10'>>><T' '><SR100G1L1<T'red '>><T'counters.'>>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "font-weight": "normal",
            "text-decoration": "none",
            "selectable": false
          }
        },
        "94": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "1",
            "1": "2",
            "2": "92"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 815,
              "y": 679
            }
          },
          "textMFS": "<VL<H<T'The sum of '><?1xC0001<H<T'3'>>><T' and '><?1xC0002<H<T'7'>>><T' does not generate zero pairs so there are a total of '><?1xC0003<H<T'10'>>><T' '><SR1G1L100<T'blue '>><T'counters.'>>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "font-weight": "normal",
            "text-decoration": "none",
            "selectable": false
          }
        },
        "95": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "49"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1131,
              "y": 526
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1/@0*2",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "96": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "50"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1131,
              "y": 526
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1/@0*2",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "97": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "49"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1019,
              "y": 394
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-@0",
          "latentVisibility": true,
          "label": "m[7]",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "98": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "50"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1019,
              "y": 411
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-@0",
          "latentVisibility": true,
          "label": "m[7]",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "99": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "97",
            "1": "79"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1128,
              "y": 497
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(sgn(@0*@1))",
          "latentVisibility": true,
          "label": "(m[7])^(m[6]>0)",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "100": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "98",
            "1": "80"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1128,
              "y": 519
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(sgn(@0*@1))",
          "latentVisibility": true,
          "label": "(m[7])^(m[6]<0)",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "selectable": false
          }
        },
        "101": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "99"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1146,
              "y": 538
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1/@0*2",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "102": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "100"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1146,
              "y": 538
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1/@0*2",
          "style": {
            "hidden": true,
            "font-size": 10,
            "precision": 2,
            "nameOrigin": "namedFromTemplate",
            "selectable": false
          }
        },
        "103": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 24,
              "y": 64
            }
          },
          "style": {
            "hidden": true
          }
        },
        "104": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 663,
              "y": 64
            }
          },
          "style": {
            "hidden": true
          }
        },
        "105": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "103",
            "p1": "104"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "106": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1223,
              "y": 500
            }
          },
          "textMFS": "<VL<T'diff signs and greater than 0'>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "font-weight": "normal",
            "text-decoration": "none",
            "color": "rgb(255,128,0)",
            "selectable": false
          }
        },
        "107": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1223,
              "y": 519
            }
          },
          "textMFS": "<VL<T'diff signs and less than 0'>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "font-weight": "normal",
            "text-decoration": "none",
            "color": "rgb(255,128,0)",
            "selectable": false
          }
        },
        "108": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1226,
              "y": 405
            }
          },
          "textMFS": "<VL<T'sum +ve'>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "font-weight": "normal",
            "text-decoration": "none",
            "color": "rgb(255,128,0)",
            "selectable": false
          }
        },
        "109": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1220,
              "y": 428
            }
          },
          "textMFS": "<VL<T'sum -ve'>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "font-weight": "normal",
            "text-decoration": "none",
            "color": "rgb(255,128,0)",
            "selectable": false
          }
        },
        "110": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1228,
              "y": 453
            }
          },
          "textMFS": "<VL<T'sum 0'>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 10,
            "font-weight": "normal",
            "text-decoration": "none",
            "color": "rgb(255,128,0)",
            "selectable": false
          }
        },
        "111": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "105"
          },
          "value": 0.41471048513302033,
          "constraint": "PointOnPath",
          "style": {
            "hidden": true
          }
        },
        "112": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "111"
          },
          "angle": -1.5707963267949,
          "distance": 14.173228346456693,
          "constraint": "TranslateFixDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "113": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "112",
            "center": "111",
            "measure": "102"
          },
          "constraint": "DilateMeasureFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "114": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "113",
            "text": "78"
          },
          "constraint": "Pegged",
          "style": {
            "font-size": 16,
            "font-weight": "normal",
            "text-decoration": "none",
            "selectable": false
          }
        },
        "115": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "105"
          },
          "value": 0.41784037558685444,
          "constraint": "PointOnPath",
          "style": {
            "hidden": true
          }
        },
        "116": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "115"
          },
          "angle": -1.5707963267949,
          "distance": 14.173228346456693,
          "constraint": "TranslateFixDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "117": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "116",
            "center": "115",
            "measure": "101"
          },
          "constraint": "DilateMeasureFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "118": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "117",
            "text": "82"
          },
          "constraint": "Pegged",
          "style": {
            "font-size": 16,
            "font-weight": "normal",
            "text-decoration": "none",
            "selectable": false
          }
        },
        "119": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "105"
          },
          "value": 0.4131455399061033,
          "constraint": "PointOnPath",
          "style": {
            "hidden": true
          }
        },
        "120": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "119"
          },
          "angle": -1.5707963267949,
          "distance": 14.173228346456693,
          "constraint": "TranslateFixDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "121": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "120",
            "center": "119",
            "measure": "90"
          },
          "constraint": "DilateMeasureFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "122": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "121",
            "text": "83"
          },
          "constraint": "Pegged",
          "style": {
            "font-size": 16,
            "font-weight": "normal",
            "text-decoration": "none",
            "selectable": false
          }
        },
        "123": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "105"
          },
          "value": 0.5712050078247262,
          "constraint": "PointOnPath",
          "style": {
            "hidden": true
          }
        },
        "124": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "123"
          },
          "angle": -1.5707963267949,
          "distance": 14.173228346456693,
          "constraint": "TranslateFixDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "125": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "124",
            "center": "123",
            "measure": "95"
          },
          "constraint": "DilateMeasureFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "126": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "125",
            "text": "93"
          },
          "constraint": "Pegged",
          "style": {
            "font-weight": "normal",
            "text-decoration": "none",
            "selectable": false
          }
        },
        "127": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "105"
          },
          "value": 0.5070422535211268,
          "constraint": "PointOnPath",
          "style": {
            "hidden": true
          }
        },
        "128": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "127"
          },
          "angle": -1.5707963267949,
          "distance": 14.173228346456693,
          "constraint": "TranslateFixDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "129": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "128",
            "center": "127",
            "measure": "96"
          },
          "constraint": "DilateMeasureFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "130": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "129",
            "text": "94"
          },
          "constraint": "Pegged",
          "style": {
            "font-size": 16,
            "font-weight": "normal",
            "text-decoration": "none",
            "selectable": false
          }
        },
        "131": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "3",
            "1": "4",
            "2": "5",
            "3": "6",
            "4": "7",
            "5": "8",
            "6": "9",
            "7": "10",
            "8": "11",
            "9": "12",
            "10": "13",
            "11": "14",
            "12": "15",
            "13": "16",
            "14": "19",
            "15": "20",
            "16": "21",
            "17": "22",
            "18": "23",
            "19": "24",
            "20": "25",
            "21": "26",
            "22": "47",
            "23": "48",
            "24": "49",
            "25": "50",
            "26": "51",
            "27": "52",
            "28": "53",
            "29": "54",
            "30": "57",
            "31": "58",
            "32": "59",
            "33": "60",
            "34": "63",
            "35": "64",
            "36": "70",
            "37": "71",
            "38": "72",
            "39": "76",
            "40": "77",
            "41": "78",
            "42": "79",
            "43": "80",
            "44": "81",
            "45": "82",
            "46": "83",
            "47": "92",
            "48": "93",
            "49": "94",
            "50": "97",
            "51": "98",
            "52": "99",
            "53": "100",
            "54": "106",
            "55": "107",
            "56": "108",
            "57": "109",
            "58": "110"
          },
          "geom": {
            "loc": {
              "x": 1229,
              "y": 5
            }
          },
          "label": "Show Objects",
          "constraint": "ActionButtonToggleHideShow",
          "messages": [
            "Hide Objects",
            "Show Objects"
          ],
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false
          }
        },
        "132": {
          "kind": "Button",
          "genus": "Action",
          "geom": {
            "loc": {
              "x": 654,
              "y": -10
            }
          },
          "label": "Previous Page",
          "style": {
            "color": "rgb(160,160,160)",
            "label": {
              "font-size": 12
            },
            "selectable": false
          },
          "constraint": "ActionButtonLinkPage",
          "messages": [
            "Previous Page"
          ],
          "pageId": "8"
        }
      }
    }
  ]
};