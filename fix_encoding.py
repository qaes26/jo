import os
import codecs

files_to_fix = [
    'index.html',
    'vite.config.js',
    'package.json',
    'tailwind.config.js',
    'postcss.config.js',
    'eslint.config.js',
    'src/main.jsx',
    'src/index.css',
    'src/App.jsx',
    'src/questions.js'
]

BOM_UTF8 = codecs.BOM_UTF8 # \xef\xbb\xbf
BOM_UTF16_LE = codecs.BOM_UTF16_LE # \xff\xfe
BOM_UTF16_BE = codecs.BOM_UTF16_BE # \xfe\xff

for file_path in files_to_fix:
    if os.path.exists(file_path):
        print(f"Checking {file_path}...")
        try:
            with open(file_path, 'rb') as f:
                content = f.read()
            
            original_len = len(content)
            
            # Check and strip BOMs
            if content.startswith(BOM_UTF8):
                content = content[len(BOM_UTF8):]
                print(f"  - Removed UTF-8 BOM from {file_path}")
            elif content.startswith(BOM_UTF16_LE):
                content = content[len(BOM_UTF16_LE):]
                # If it was UTF-16LE, we likely need to decode it as such and re-encode to UTF-8
                print(f"  - Detected UTF-16LE in {file_path}, converting...")
                content = content.decode('utf-16-le').encode('utf-8')
            elif content.startswith(BOM_UTF16_BE):
                content = content[len(BOM_UTF16_BE):]
                print(f"  - Detected UTF-16BE in {file_path}, converting...")
                content = content.decode('utf-16-be').encode('utf-8')
            
            # Write back as clean UTF-8
            with open(file_path, 'wb') as f:
                f.write(content)
                
            print(f"  - Verified/Fixed {file_path} (Size: {original_len} -> {len(content)})")
            
        except Exception as e:
            print(f"  - Error processing {file_path}: {e}")
    else:
        print(f"Skipping missing file: {file_path}")
