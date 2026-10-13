export type ModuleStatus = 'core' | 'next' | 'roadmap';

export const statusLabel: Record<ModuleStatus, string> = {
  core: 'Core',
  next: 'Next',
  roadmap: 'Roadmap'
};

export const statusClass: Record<ModuleStatus, string> = {
  core: 'bg-brand-50 text-brand-700',
  next: 'bg-blue-50 text-blue-700',
  roadmap: 'bg-gray-100 text-gray-600'
};

// Display order for module groups on /modules/.
export const groupOrder = [
  'Inspection & quality',
  'Asset core',
  'Documents & records',
  'Field operations',
  'Collaboration & coordination',
  'Handover & asset lifecycle',
  'Safety & compliance',
  'Reporting, search & AI',
  'Identity & access',
  'Commercial',
  'Platform services'
];
