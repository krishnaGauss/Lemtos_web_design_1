import { LucideIcon } from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: 'Cpu' | 'Database' | 'Code' | 'BarChart' | 'Globe' | 'ShieldCheck';
  features: string[];
  image: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface NavItem {
  label: string;
  path: string;
}