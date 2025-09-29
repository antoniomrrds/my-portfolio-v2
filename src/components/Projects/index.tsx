'use client';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Globe,
  Grid3X3,
  Layers,
  List,
  Puzzle,
  Search,
  Server,
  SlidersHorizontal,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

export const Projects = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState('recent');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const categories = [
    {
      id: 'all',
      label: 'Todos',
      icon: <Globe className='h-4 w-4' />,
      color: 'text-green-400!',
    },
    {
      id: 'backend',
      label: 'Backend & APIs',
      icon: <Server className='h-4 w-4' />,
      color: 'text-chart-4! ',
    },
    {
      id: 'frontend',
      label: 'Frontend',
      icon: <Puzzle className='h-4 w-4' />,
      color: 'text-cyan-400!',
    },
    // {
    //   id: 'ai',
    //   label: 'IA & ML',
    //   icon: <Cpu className='h-4 w-4' />,
    //   color: 'text-chart-1',
    // }
  ];

  const hasActiveFilters =
    selectedCategory !== 'all' ||
    selectedTechnologies.length > 0 ||
    searchQuery !== '';

  return (
    <section id='projects'className="py-20 px-4 ">
      <div className='container mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='text-center mb-12'
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className='inline-flex items-center gap-2 mb-6
          border-green-400 border-2 px-6 py-3 bg-c rounded-full shadow-sm'
          >
            <Layers className='h-5 w-5 text-green-400 ' />
            <span className='font-medium'>Projetos</span>
          </motion.div>
          <h2 className='text-4xl md:text-5xl lg:text-6xl mb-6 font-bold text-foreground'>
            Meu <span className='text-cyan-400'>Portfólio</span>
          </h2>
          <p className='text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed'>
            Explore uma seleção dos meus projetos.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className='mb-10'
        >
          <div className='flex  flex-col  gap-6 items-center w-full justify-between xl:flex-row  '>
            <div className='relative w-full '>
              <Search
                className='absolute left-4 top-1/2 transform -translate-y-1/2
               h-5 w-5 text-amber-400!'
              />
              <Input
                placeholder='Buscar projetos, tecnologias...'
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className='pl-12 h-12 bg-black! border border-amber-400 shadow-sm text-base'
              />
            </div>

            <div className='flex items-center gap-4 w-full flex-col  xl:flex-row'>
              <Tabs
                value={selectedCategory}
                onValueChange={setSelectedCategory}
                className="w-full"
              >
                <TabsList className='h-12 bg-card border border-border shadow-md w-full'>
                  {categories.slice(0, 4).map(category => (
                    <TabsTrigger
                      key={category.id}
                      value={category.id ?? 'all'}
                      className={`data-[state=active]:bg-black! data-[state=active]:text-fuchsia-400! data-[state=active]:shadow-sm h-10 px-4 ${category.color}`}
                    >
                      {category.icon}
                      <span className='ml-2 hidden sm:inline font-medium'>
                        {category.label}
                      </span>
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>

             <div className='flex lg:flex-row w-full  gap-3  flex-col '>

              <Button
                variant='outline'
                onClick={() => setShowFilters(!showFilters)}
                className={`h-12  px-6 border-border grow-1 shadow-sm ${hasActiveFilters ? 'border-primary text-fuchsia-400!' : 'bg-card'}`}
              >
                <SlidersHorizontal className='h-5 w-5' />
                <span className='ml-2  sm:inline font-medium'>
                  Filtros
                </span>
                {hasActiveFilters ? (
                  <Badge
                    variant='secondary'
                    className='ml-2 h-5 bg-primary text-primary-foreground'
                  >
                    {[
                      selectedCategory !== 'all' ? 1 : 0,
                      selectedTechnologies.length,
                    ].reduce((a, b) => a + b)}
                  </Badge>
                ) : null}
              </Button>

              <div className='flex items-center gap-3  '>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className='w-44 h-12!  border-border shadow-sm '>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value='recent'>Mais Recentes</SelectItem>
                    <SelectItem value='popular'>Mais Populares</SelectItem>
                    <SelectItem value='views'>Mais Vistos</SelectItem>
                    <SelectItem value='name'>Nome A-Z</SelectItem>
                  </SelectContent>
                </Select>
                 {/* button de listar */}
                <div className='flex border border-border  rounded-lg bg-card shadow-sm flex-none '>
                  <Button
                    variant={viewMode === 'grid' ? 'default' : 'ghost'}
                    size='sm'
                    onClick={() => setViewMode('grid')}
                    className='rounded-r-none h-12 w-12'
                  >
                    <Grid3X3 className='h-5 w-5' />
                  </Button>
                  <Button
                    variant={viewMode === 'list' ? 'default' : 'ghost'}
                    size='sm'
                    onClick={() => setViewMode('list')}
                    className='rounded-l-none border-l border-border h-12 w-12'
                  >
                    <List className='h-5 w-5' />
                  </Button>
                </div>
              </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
