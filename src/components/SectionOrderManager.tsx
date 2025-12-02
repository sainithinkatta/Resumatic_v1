import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Eye, EyeOff, GripVertical, ChevronUp, ChevronDown } from 'lucide-react';
import { SectionConfig } from '@/types';
import { getSectionDisplayName } from '@/utils/sectionOrderUtils';

// Props for the section order management component
interface SectionOrderManagerProps {
  sections: SectionConfig[]; // Current section configuration
  onChange: (sections: SectionConfig[]) => void; // Callback when order/visibility changes
}

// UI component for reordering and toggling visibility of resume sections
export default function SectionOrderManager({ sections, onChange }: SectionOrderManagerProps) {
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);
  const [dragOverIndex, setDragOverIndex] = useState<number | null>(null);

  // Marks the starting index of a drag operation
  const handleDragStart = (index: number) => {
    setDraggedIndex(index);
  };

  // Updates hover state during drag for visual feedback
  const handleDragOver = (e: React.DragEvent, index: number) => {
    e.preventDefault();
    setDragOverIndex(index);
  };

  // Clears the hover state when leaving a drop target
  const handleDragLeave = () => {
    setDragOverIndex(null);
  };

  // Finalizes the drop, reordering the sections array
  const handleDrop = (e: React.DragEvent, dropIndex: number) => {
    e.preventDefault();

    if (draggedIndex === null || draggedIndex === dropIndex) {
      setDraggedIndex(null);
      setDragOverIndex(null);
      return;
    }

    const newSections = [...sections];
    const [draggedItem] = newSections.splice(draggedIndex, 1);
    newSections.splice(dropIndex, 0, draggedItem);

    const updatedSections = newSections.map((section, index) => ({
      ...section,
      order: index,
    }));

    onChange(updatedSections);
    setDraggedIndex(null);
    setDragOverIndex(null);
  };

  // Cleans up state after a drag operation ends
  const handleDragEnd = () => {
    setDraggedIndex(null);
    setDragOverIndex(null);
  };

  // Moves a section up one position in the list
  const moveUp = (index: number) => {
    if (index === 0) return;

    const newSections = [...sections];
    [newSections[index - 1], newSections[index]] = [newSections[index], newSections[index - 1]];

    const updatedSections = newSections.map((section, idx) => ({
      ...section,
      order: idx,
    }));

    onChange(updatedSections);
  };

  // Moves a section down one position in the list
  const moveDown = (index: number) => {
    if (index === sections.length - 1) return;

    const newSections = [...sections];
    [newSections[index], newSections[index + 1]] = [newSections[index + 1], newSections[index]];

    const updatedSections = newSections.map((section, idx) => ({
      ...section,
      order: idx,
    }));

    onChange(updatedSections);
  };

  // Toggles the visibility (show/hide) of a specific section
  const toggleVisibility = (index: number) => {
    const newSections = [...sections];
    newSections[index] = {
      ...newSections[index],
      visible: !newSections[index].visible,
    };

    onChange(newSections);
  };

  return (
    <div>
      <div className="mb-4">
        <p className="text-xs text-muted-foreground mt-1">
          Drag sections to reorder, or use arrow buttons. Toggle visibility with the eye icon.
        </p>
      </div>

      <div className="space-y-2">
        {sections.map((section, index) => {
          const isBeingDragged = draggedIndex === index;
          const isDraggedOver = dragOverIndex === index;

          return (
            <div
              key={section.type}
              draggable
              onDragStart={() => handleDragStart(index)}
              onDragOver={(e) => handleDragOver(e, index)}
              onDragLeave={handleDragLeave}
              onDrop={(e) => handleDrop(e, index)}
              onDragEnd={handleDragEnd}
              className={`
                flex items-center gap-2 p-2 rounded-md border transition-all
                ${isBeingDragged ? 'opacity-50 cursor-grabbing' : 'cursor-grab'}
                ${isDraggedOver ? 'border-primary bg-primary/5' : 'border-border'}
                ${!section.visible ? 'opacity-60' : ''}
                hover:bg-accent/50
              `}
            >
              <GripVertical className="h-4 w-4 text-muted-foreground flex-shrink-0" />
              <span className="flex-1 text-sm font-medium">
                {getSectionDisplayName(section.type)}
              </span>
              <div className="flex items-center gap-1">
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-7 w-7 p-0"
                  onClick={() => toggleVisibility(index)}
                  title={section.visible ? 'Hide section' : 'Show section'}
                >
                  {section.visible ? (
                    <Eye className="h-3.5 w-3.5" />
                  ) : (
                    <EyeOff className="h-3.5 w-3.5" />
                  )}
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-7 w-7 p-0"
                  onClick={() => moveUp(index)}
                  disabled={index === 0}
                  title="Move up"
                >
                  <ChevronUp className="h-3.5 w-3.5" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-7 w-7 p-0"
                  onClick={() => moveDown(index)}
                  disabled={index === sections.length - 1}
                  title="Move down"
                >
                  <ChevronDown className="h-3.5 w-3.5" />
                </Button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-4 pt-4 border-t text-xs text-muted-foreground">
        💡 Tip: Hidden sections won't appear on your resume but data is preserved.
      </div>
    </div>
  );
}