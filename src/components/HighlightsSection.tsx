import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface HighlightItem {
  title: string;
  description: string;
  metric?: string;
  icon?: string;
  source?: string;
  date?: string;
}

interface HighlightsSectionProps {
  highlights: HighlightItem[];
}

const HighlightsSection = ({ highlights }: HighlightsSectionProps) => {
  return (
    <section className="mb-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-white">Spotlight</h2>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm">
          Contact
        </Button>
      </div>

      <div className="grid gap-4">
        {highlights.map((highlight, index) => (
          <Card key={index} className="bg-gray-900/50 border-gray-800">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                {highlight.icon && (
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm">
                    {highlight.icon}
                  </div>
                )}
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {highlight.description}
                  </p>
                </div>
                {highlight.metric && (
                  <Badge
                    variant="outline"
                    className="border-green-500 text-green-400 bg-green-500/10"
                  >
                    {highlight.metric}
                  </Badge>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default HighlightsSection;
