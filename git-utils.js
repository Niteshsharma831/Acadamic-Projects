const { execSync } = require('child_process');

const gitUtils = {
    // Get current branch name
    getCurrentBranch: () => {
        try {
            return execSync('git rev-parse --abbrev-ref HEAD').toString().trim();
        } catch (error) {
            console.error('Error getting current branch:', error.message);
            return null;
        }
    },

    // List all branches
    getAllBranches: () => {
        try {
            const branches = execSync('git branch -a').toString().trim().split('\n');
            return branches.map(branch => branch.trim().replace('* ', ''));
        } catch (error) {
            console.error('Error listing branches:', error.message);
            return [];
        }
    },

    // Check if branch exists
    branchExists: (branchName) => {
        try {
            execSync(`git rev-parse --verify ${branchName}`);
            return true;
        } catch (error) {
            return false;
        }
    }
};

module.exports = gitUtils;
