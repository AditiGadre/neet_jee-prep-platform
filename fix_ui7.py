import re

with open('src/components/AdminSection.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# I will add the missing )} back!
content = content.replace(
'''                                    All pre-existing images/diagrams flagged for deletion upon save!
                                  </div>
                                  
                              </div>''',
'''                                    All pre-existing images/diagrams flagged for deletion upon save!
                                  </div>
                                )}
                              </div>'''
)

with open('src/components/AdminSection.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
print("Fixed missing parenthesis")
