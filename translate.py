#!/usr/bin/env python3
"""
Translate privacy.md and tnc.md to French and Italian with exact line count matching.
Uses Claude API for high-quality translations.
"""
import anthropic
import os

client = anthropic.Anthropic(api_key=os.environ.get("ANTHROPIC_API_KEY"))

def translate_file(source_path, target_lang, target_path):
    """Translate a file while preserving exact line count."""
    
    with open(source_path, 'r', encoding='utf-8') as f:
        source_content = f.read()
        source_lines = source_content.count('\n') + 1
    
    lang_names = {'fr': 'French', 'it': 'Italian'}
    
    prompt = f"""Translate this German legal/privacy document to professional {lang_names[target_lang]}.

CRITICAL REQUIREMENTS:
1. The translation MUST have EXACTLY {source_lines} lines (same as German original)
2. Keep EXACT same structure: same headings, paragraphs, blank lines
3. Only translate text content - keep all markdown formatting
4. Maintain all links, bullet points, numbering
5. Use professional legal/business language

German source document:
{source_content}

Provide ONLY the translated text, no explanations."""

    message = client.messages.create(
        model="claude-3-5-sonnet-20241022",
        max_tokens=16000,
        messages=[{"role": "user", "content": prompt}]
    )
    
    translation = message.content[0].text
    
    # Write translation
    with open(target_path, 'w', encoding='utf-8') as f:
        f.write(translation)
    
    # Verify line count
    translated_lines = translation.count('\n') + 1
    print(f"✓ {target_path}: {translated_lines} lines (expected {source_lines})")
    
    if translated_lines != source_lines:
        print(f"  WARNING: Line count mismatch!")
        return False
    return True

# Translate privacy.md
print("Translating privacy.md...")
translate_file('src/de/privacy.md', 'fr', 'src/fr/privacy.md')
translate_file('src/de/privacy.md', 'it', 'src/it/privacy.md')

# Translate tnc.md
print("\nTranslating tnc.md...")
translate_file('src/de/tnc.md', 'fr', 'src/fr/tnc.md')
translate_file('src/de/tnc.md', 'it', 'src/it/tnc.md')

print("\nDone!")
