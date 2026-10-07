import urllib.request
import re
import ssl

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

url = "https://neetcbtexam.com/"
req = urllib.request.Request(url)
with urllib.request.urlopen(req, context=ctx) as response:
    html = response.read().decode('utf-8')
    
scripts = re.findall(r'<script type="module" crossorigin src="([^"]+)"></script>', html)
if scripts:
    js_url = "https://neetcbtexam.com" + scripts[0]
    js_req = urllib.request.Request(js_url)
    with urllib.request.urlopen(js_req, context=ctx) as js_response:
        js_content = js_response.read().decode('utf-8')
        if "max-h-64 object-contain" in js_content:
            print("YES! The class is present!")
        else:
            print("NO! The class is MISSING!")
