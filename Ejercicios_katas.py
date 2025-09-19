import os

TOTAL_EJERCICIOS = 9

for i in range(1, TOTAL_EJERCICIOS + 1):
    carpeta = f"K{i}"
    archivo_js = f"K{i}.js"
    archivo_md = "Enunciado.md"


    os.makedirs(carpeta)


    js_path = os.path.join(carpeta, archivo_js)
    if not os.path.exists(js_path):
        with open(js_path, "w", encoding="utf-8") as f:
            pass  


    md_path = os.path.join(carpeta, archivo_md)
    if not os.path.exists(md_path):
        with open(md_path, "w", encoding="utf-8") as f:
            f.write(f"# Ejercicio k{i}\n\n")