import os
import pandas as pd

# List of expected files (without 731.py)
file_names = [
    929, 482, 1, 844, 299, 359, 1170, 205, 734, 849,
    346, 475, 246, 686, 914, 904, 1007, 681, 399, 159,
    222, 947, 809, 1057, 833, 939, 1055, 777, 659, 1110,
    843, 975, 410, 857, 642, 683, 248, 489, 753,
    1153, 736, 727, 1088, 308, 803
]

# Convert to filenames with .py extension
file_names_py = [f"{name}.py" for name in file_names]

# Generate absolute paths for existing files in CWD
cwd = os.getcwd()
file_paths = [
    os.path.join(cwd, f) for f in file_names_py if os.path.isfile(f)
]

# Create DataFrame and export to Excel
df = pd.DataFrame(file_paths, columns=["File Path"])
excel_path = r"C:\Users\prati\Downloads\finalgoogletop45.xlsx"

df.to_excel(excel_path, index=False)

excel_path
