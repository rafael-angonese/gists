import CodePreview from "@/components/CodePreview/CodePreview";
import ComponentLayout from "@/components/ComponentLayout/ComponentLayout";
import { Text } from "fuselagem";
import React from "react";

const code = `import { Badge } from "fuselagem";`;

const BadgeImport: React.FC = () => {
  return (
    <ComponentLayout>
      <Text variant="h1">Import</Text>

      <CodePreview code={code} />
    </ComponentLayout>
  );
};

export default BadgeImport;
