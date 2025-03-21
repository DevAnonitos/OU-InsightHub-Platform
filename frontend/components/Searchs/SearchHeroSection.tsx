"use client";

import React from 'react'
import { SearchBar } from './Searchbar';
import { motion } from "framer-motion"
import { SearchCategories } from './SearchCategories';
import { SearchTags } from './SearchTags';
import { ExploreSection } from './ExploreSection';

const SearchHeroSection = () => {
  return (
    <section className="py-16 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto w-full"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
          OU Insight Hub Search
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Search across our comprehensive database of Ho Chi Minh Open University resources
        </p>
        <SearchBar />
        <SearchTags />
        <div className="space-y-2">
          <h2 className="text-lg text-start font-medium text-slate-900 dark:text-white">Browse by Category</h2>
          <SearchCategories />
        </div>
        <div className='mt-8'>
          <ExploreSection />
        </div>
      </motion.div>
    </section>
  )
}

export default SearchHeroSection