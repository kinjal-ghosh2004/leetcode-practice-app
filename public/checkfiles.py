import os

# List of the expected .py filenames
expected_files = {
    f"{name}.py" for name in [
        929, 482, 1, 844, 299, 359, 1170, 205, 734, 849,
        346, 475, 246, 686, 914, 904, 1007, 681, 399, 159,
        222, 947, 809, 1057, 833, 939, 1055, 777, 659, 1110,
        731, 843, 975, 410, 857, 642, 683, 248, 489, 753,
        1153, 736, 727, 1088, 308, 803
    ]
}

# Get all .py files in the current directory
all_py_files = {f for f in os.listdir() if f.endswith(".py")}

# Compare sets
present_files = expected_files & all_py_files
missing_files = expected_files - all_py_files
extra_files = all_py_files - expected_files

# Output results
print(f"✅ Present ({len(present_files)}):")
for f in sorted(present_files):
    print(f"  ✔ {f}")

print(f"\n❌ Missing ({len(missing_files)}):")
for f in sorted(missing_files):
    print(f"  ✖ {f}")

print(f"\n⚠️ Extra ({len(extra_files)}):")
for f in sorted(extra_files):
    print(f"  ➕ {f}")
