import React, { useState } from 'react';
import { Rocket, Wallet, Clock, Users, ChevronRight, Shield, Globe, Sparkles, Image, Zap, Droplets, Coins, TowerControl as GameController, LayoutDashboard } from 'lucide-react';

interface IProject {
  name: string;
  description: string;
  image: string;
  totalRaise: string;
  tokenPrice: string;
  startTime: string;
  status: 'upcoming' | 'live' | 'ended';
}

const projects: IProject[] = [
  {
    name: "MetaVerse Token",
    description: "Next-generation virtual world ecosystem powered by blockchain",
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=400&h=250",
    totalRaise: "500,000 USDT",
    tokenPrice: "0.05 USDT",
    startTime: "2024-03-20 14:00 UTC",
    status: "upcoming"
  },
  {
    name: "DeFi Protocol",
    description: "Decentralized finance protocol for cross-chain lending and borrowing",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=400&h=250",
    totalRaise: "1,000,000 USDT",
    tokenPrice: "0.1 USDT",
    startTime: "2024-03-18 10:00 UTC",
    status: "live"
  },
  {
    name: "GameFi Project",
    description: "Play-to-earn gaming platform with NFT integration",
    image: "https://images.unsplash.com/photo-1616509091215-57bbf1cd4b93?auto=format&fit=crop&w=400&h=250",
    totalRaise: "750,000 USDT",
    tokenPrice: "0.075 USDT",
    startTime: "2024-03-15 16:00 UTC",
    status: "ended"
  }
];

function StatusBadge({ status }: { status: string }) {
  const colors = {
    upcoming: "bg-blue-100 text-blue-800",
    live: "bg-green-100 text-green-800",
    ended: "bg-gray-100 text-gray-800"
  };

  return (
    <span className={`px-3 py-1 rounded-full text-sm font-medium ${colors[status as keyof typeof colors]}`}>
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
}

function ProjectCard({ project }: { project: IProject }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <img src={project.image} alt={project.name} className="w-full h-48 object-cover" />
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-gray-900">{project.name}</h3>
          <StatusBadge status={project.status} />
        </div>
        <p className="text-gray-600 mb-4">{project.description}</p>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <p className="text-sm text-gray-500">Total Raise</p>
            <p className="font-semibold">{project.totalRaise}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Token Price</p>
            <p className="font-semibold">{project.tokenPrice}</p>
          </div>
        </div>
        <div className="flex items-center text-sm text-gray-500">
          <Clock className="w-4 h-4 mr-1" />
          <span>{project.startTime}</span>
        </div>
      </div>
      <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
        <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center">
          View Details
          <ChevronRight className="w-4 h-4 ml-2" />
        </button>
      </div>
    </div>
  );
}

function FeatureSection({ icon: Icon, title, description, items }: {
  icon: React.ElementType;
  title: string;
  description: string;
  items: string[];
}) {
  return (
    <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center mb-6">
        <div className="bg-blue-100 p-3 rounded-lg">
          <Icon className="w-8 h-8 text-blue-600" />
        </div>
        <h3 className="text-2xl font-bold ml-4">{title}</h3>
      </div>
      <p className="text-gray-600 mb-6">{description}</p>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index} className="flex items-start">
            <ChevronRight className="w-5 h-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
            <span className="text-gray-700">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function CoreFeatures() {
  const features = [
    {
      icon: Sparkles,
      title: "Meme Launchpad",
      description: "Launch your meme tokens with customizable tokenomics and simplified tools.",
      items: [
        "Customizable market cap and total supply",
        "Liquidity management options",
        "User-friendly token creation interface",
        "Automated smart contract deployment"
      ]
    },
    {
      icon: Image,
      title: "NFT Launchpad",
      description: "Launch both traditional and hybrid NFT collections with advanced features.",
      items: [
        "Fractionalized ownership support",
        "Liquidity-backed NFT pools",
        "Multiple minting options (pre-sales, auctions)",
        "Whitelist management system"
      ]
    },
    {
      icon: Zap,
      title: "Utility Launchpad",
      description: "Complete toolkit for launching utility-focused blockchain projects.",
      items: [
        "Presale and IDO support",
        "Transparent vesting schedules",
        "Real-time project metrics",
        "Professional incubation services"
      ]
    },
    {
      icon: Droplets,
      title: "Liquidity Pools",
      description: "Provide liquidity and earn rewards from transaction fees.",
      items: [
        "Community-driven liquidity provision",
        "Automated market making",
        "Fee sharing for providers",
        "Multi-token pool support"
      ]
    },
    {
      icon: Coins,
      title: "Staking",
      description: "Earn passive income by staking your assets in various pools.",
      items: [
        "Single-asset staking",
        "Paired staking options",
        "Flexible lock periods",
        "Compound rewards"
      ]
    },
    {
      icon: GameController,
      title: "Gamified Engagement",
      description: "Earn rewards through active platform participation.",
      items: [
        "Action-based point system",
        "Redeemable perks and rewards",
        "Future airdrop eligibility",
        "Achievement tracking"
      ]
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {features.map((feature, index) => (
        <FeatureSection key={index} {...feature} />
      ))}
    </div>
  );
}

function App() {
  const [activeTab] = useState('featured');

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div className="bg-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Launch Your Token with Confidence
            </h1>
            <p className="text-xl text-blue-200 mb-8">
              The most trusted launchpad for new blockchain projects
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300">
                Launch Project
              </button>
              <button className="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors duration-300">
                View Projects
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12">
        <div className="bg-white rounded-xl shadow-lg grid grid-cols-1 md:grid-cols-3 gap-8 p-8">
          <div className="flex items-center">
            <Rocket className="w-12 h-12 text-blue-600 mr-4" />
            <div>
              <p className="text-2xl font-bold">150+</p>
              <p className="text-gray-600">Projects Launched</p>
            </div>
          </div>
          <div className="flex items-center">
            <Users className="w-12 h-12 text-blue-600 mr-4" />
            <div>
              <p className="text-2xl font-bold">50,000+</p>
              <p className="text-gray-600">Community Members</p>
            </div>
          </div>
          <div className="flex items-center">
            <Wallet className="w-12 h-12 text-blue-600 mr-4" />
            <div>
              <p className="text-2xl font-bold">$100M+</p>
              <p className="text-gray-600">Total Raised</p>
            </div>
          </div>
        </div>
      </div>

      {/* Core Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Comprehensive Launch Solutions</h2>
          <p className="text-xl text-gray-600">Everything you need to launch and grow your blockchain project</p>
        </div>
        <CoreFeatures />
      </div>

      {/* Dashboard Preview */}
      <div className="bg-blue-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Intuitive Interface</h2>
            <p className="text-xl text-gray-600">Manage your entire project lifecycle from a single dashboard</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center mb-8">
              <LayoutDashboard className="w-8 h-8 text-blue-600 mr-3" />
              <h3 className="text-2xl font-bold">All-in-One Dashboard</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {['Launch Management', 'Liquidity Pools', 'Staking Analytics', 'Reward Tracking'].map((item, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6 text-center">
                  <p className="font-semibold text-gray-800">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Featured Projects</h2>
          <button className="text-blue-600 hover:text-blue-700 font-semibold flex items-center">
            View All
            <ChevronRight className="w-4 h-4 ml-1" />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;