import os
os.chdir('randomizer')
os.system('npx tailwindcss -i ./static/input.css -o ./static/output.css --watch')