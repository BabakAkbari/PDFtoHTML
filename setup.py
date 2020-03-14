import os
os.system('pdftohtml -c -i test.pdf output/o.html')
i = 1
filename = "/output/o-"+str(i)+".html"
filepath = os.getcwd()+filename
while os.path.isfile(filepath):
    with open(filepath) as fp:
        lines = fp.read().splitlines()
        lines = lines[:-1]
    with open(filepath, "w") as fp:
        for line in lines:
            fp.write(line + "\n")
        fp.write("\n<script src=\"../js/setup.js\"></script>\n<script>setup();</script>\n")
    filename = "/output/o-"+str(i)+".html"
    filepath = os.getcwd()+filename
    i=i+1
